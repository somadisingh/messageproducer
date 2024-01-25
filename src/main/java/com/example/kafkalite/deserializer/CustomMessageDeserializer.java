package com.example.kafkalite.deserializer;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.kafka.common.serialization.Deserializer;

import java.util.Map;

public class CustomMessageDeserializer implements Deserializer<Object> {

    private final ObjectMapper objectMapper = new ObjectMapper();

    @Override
    public void configure(Map<String, ?> configs, boolean isKey) {
        // No additional configuration needed
    }

    @Override
    public Object deserialize(String topic, byte[] data) {
        try {
            // Deserialize the byte array into a Map
            Map<String, Object> map = objectMapper.readValue(data, Map.class);

            // Convert the Map to the desired format (e.g., "message: { ... }")
            String formattedMessage = "message: " + objectMapper.writeValueAsString(map);

            return formattedMessage;
        } catch (Exception e) {
            throw new RuntimeException("Error deserializing message", e);
        }
    }

    @Override
    public void close() {
        // No resources to release
    }
}

