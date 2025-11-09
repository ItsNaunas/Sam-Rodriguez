package math;

import java.util.Set;
import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;

/**
 * Configures the REST application for CycleNestOrchestrator.
 * All resources inside the "math" package will be registered under /webresources.
 */
@ApplicationPath("webresources")
public class ApplicationConfig extends Application {

    @Override
    public Set<Class<?>> getClasses() {
        Set<Class<?>> resources = new java.util.HashSet<>();
        addRestResourceClasses(resources);
        return resources;
    }

    /**
     * Automatically registers all REST resources in this project.
     */
    private void addRestResourceClasses(Set<Class<?>> resources) {
        resources.add(math.ProximityResource.class);
    }
}
