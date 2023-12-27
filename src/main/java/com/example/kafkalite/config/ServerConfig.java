package com.example.kafkalite.config;

// import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

// import org.springframework.beans.factory.annotation.Value;
// import org.springframework.context.annotation.Configuration;

@Configuration
public class ServerConfig {

    private String bootstrapServers;

    public ServerConfig() {
        // Default constructor
    }

    @Value("${spring.kafka.bootstrap-servers}")
    public void setBootstrapServers(String bootstrapServers) {
        this.bootstrapServers = bootstrapServers;
    }

    public String getBootstrapServers() {
        return bootstrapServers;
    }
}
