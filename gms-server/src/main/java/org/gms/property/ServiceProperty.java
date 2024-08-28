package org.gms.property;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@ConfigurationProperties(prefix = "gms.service")
@Component
@Data
public class ServiceProperty {
    private String language;
    private RateLimitProperty rateLimit;

    @Data
    public static class RateLimitProperty {
        private boolean enabled;
        private int limit;
        private long duration;
        private boolean autoBan;
    }
}
