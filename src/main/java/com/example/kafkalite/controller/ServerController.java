package com.example.kafkalite.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMethod;

import com.example.kafkalite.config.ServerConfig;

@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*", methods = {RequestMethod.GET, RequestMethod.POST})
@RestController
@RequestMapping("/server")
public class ServerController {
    
    private final ServerConfig serverConfig;

    @Autowired
    public ServerController(ServerConfig serverConfig) {
        this.serverConfig = serverConfig;
    }

    // @PostMapping("/update")
    // public String updateServerConfig(@RequestBody ServerConfig serverConfig) {
    //     this.serverConfig.setBootstrapServers(serverConfig.getBootstrapServers());
    //     return "Server config updated";
    // }

    @PostMapping("/update")
    public String updateKafkaConfig(@RequestBody String bootstrapServers) {
        serverConfig.setBootstrapServers(bootstrapServers);
        System.out.println("Kafka configuration updated successfully: " + serverConfig.getBootstrapServers());
        return "Kafka configuration updated successfully: " + serverConfig.getBootstrapServers();
    }
    
}
