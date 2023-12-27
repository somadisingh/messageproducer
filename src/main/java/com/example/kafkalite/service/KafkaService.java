package com.example.kafkalite.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;
// import org.slf4j.Logger;
// import org.slf4j.LoggerFactory;

import com.example.kafkalite.config.TopicStatic;
import com.example.kafkalite.config.ServerConfig;


@Service
public class KafkaService {

    @Autowired
    private KafkaTemplate<String, String> kafkaTemplate;
    @Autowired
    private ServerConfig serverConfig;

    //private Logger logger = LoggerFactory.getLogger(KafkaService.class);
    
    public boolean produceMessage(String message) {
        this.kafkaTemplate.send(TopicStatic.TOPIC, message);
        //this.logger.info(String.format("Produced message -> %s", message));
        System.out.println("Produced message -> " + message + " to topic " + TopicStatic.TOPIC + " successfully on server " + serverConfig.getBootstrapServers());
        return true;
    }
}
