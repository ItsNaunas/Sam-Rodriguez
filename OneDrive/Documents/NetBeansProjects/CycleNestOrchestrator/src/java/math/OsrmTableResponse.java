package math;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class OsrmTableResponse {
    private double[][] distances;
    private double[][] durations;
    public double[][] getDistances() { return distances; }
    public void setDistances(double[][] distances) { this.distances = distances; }
    public double[][] getDurations() { return durations; }
    public void setDurations(double[][] durations) { this.durations = durations; }
}
