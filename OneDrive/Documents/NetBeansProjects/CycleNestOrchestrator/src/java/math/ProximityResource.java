package math;

import com.fasterxml.jackson.databind.ObjectMapper;
import javax.ws.rs.*;
import javax.ws.rs.core.*;
import java.net.URI;
import java.net.http.*;
import java.time.Duration;

/**
 * RESTful web service that consumes the OSRM API and returns
 * distance and duration between two coordinates in JSON format.
 *
 * Example request:
 * http://localhost:8080/CycleNestOrchestrator/webresources/proximity?from=52.9548,-1.1581&to=52.9410,-1.1930
 */
@Path("proximity")
@Produces(MediaType.APPLICATION_JSON)
public class ProximityResource {

    private static final ObjectMapper MAPPER = new ObjectMapper();
    private static final String OSRM_BASE = "https://router.project-osrm.org";

    @GET
    public Response getProximity(@QueryParam("from") String from,
                                 @QueryParam("to") String to) {

        // Validate query parameters
        if (from == null || to == null || !from.contains(",") || !to.contains(",")) {
            return Response.status(Response.Status.BAD_REQUEST)
                    .entity("{\"error\":\"Use format: from=lat,lon&to=lat,lon\"}")
                    .build();
        }

        try {
            // Split input strings into coordinates
            String[] f = from.split(",");
            String[] t = to.split(",");

            double fromLat = Double.parseDouble(f[0].trim());
            double fromLon = Double.parseDouble(f[1].trim());
            double toLat   = Double.parseDouble(t[0].trim());
            double toLon   = Double.parseDouble(t[1].trim());

            // OSRM expects longitude first, then latitude
            String path = String.format(
                "/table/v1/driving/%f,%f;%f,%f?annotations=distance,duration",
                fromLon, fromLat, toLon, toLat
            );

            // Build and send HTTP request to OSRM
            HttpClient client = HttpClient.newBuilder()
                    .connectTimeout(Duration.ofSeconds(5))
                    .build();

            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create(OSRM_BASE + path))
                    .timeout(Duration.ofSeconds(5))
                    .GET()
                    .build();

            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());

            // Handle unsuccessful status codes
            if (response.statusCode() != 200) {
                return Response.status(Response.Status.BAD_GATEWAY)
                        .entity("{\"error\":\"OSRM service returned non-200 response.\"}")
                        .build();
            }

            // Deserialize JSON response into Java object
            OsrmTableResponse osrm = MAPPER.readValue(response.body(), OsrmTableResponse.class);

            // Extract distance and duration (matrix [0][1] = origin → destination)
            double distance = osrm.getDistances()[0][1];
            double duration = osrm.getDurations()[0][1];

            // Build custom JSON response
            String jsonResponse = String.format(
                "{\"from\":{\"lat\":%f,\"lon\":%f},\"to\":{\"lat\":%f,\"lon\":%f}," +
                "\"distance_meters\":%f,\"duration_seconds\":%f,\"source\":\"osrm\"}",
                fromLat, fromLon, toLat, toLon, distance, duration
            );

            // Return success response
            return Response.ok(jsonResponse).build();

        } catch (Exception e) {
            // Log exception and return error message
            e.printStackTrace();
            return Response.status(Response.Status.BAD_GATEWAY)
                    .entity("{\"error\":\"Failed to call or parse OSRM API response.\"}")
                    .build();
        }
    }
}
