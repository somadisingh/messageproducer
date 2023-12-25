package com.example.kafkalite.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Map;

@Service
public class QueryService {
    
    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public QueryService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<Map<String, Object>> executeQuery(String query) {
        return jdbcTemplate.queryForList(query);
    }
}
