package com.example.kafkalite.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.example.kafkalite.service.QueryService;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*", methods = {RequestMethod.GET, RequestMethod.POST})
@RestController
@RequestMapping("/query")
public class queryController {
    private final QueryService queryService;

    @Autowired
    public queryController(QueryService queryService) {
        this.queryService = queryService;
    }

    @PostMapping("/execute")
    public List<Map<String, Object>> executeQuery(@RequestBody String query) {
        query = query.substring(8, query.length()-2);
        return queryService.executeQuery(query);
    }
}
