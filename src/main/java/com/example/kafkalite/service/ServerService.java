package com.example.kafkalite.service;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.kafkalite.config.ServerConfig;


@Service
public class ServerService {
    
    private final ServerConfig serverConfig;

    @Autowired
    public ServerService(ServerConfig serverConfig) {
        this.serverConfig = serverConfig;
    }
}
