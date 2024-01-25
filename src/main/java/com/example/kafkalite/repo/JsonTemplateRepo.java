package com.example.kafkalite.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.kafkalite.entity.JsonTemplate;

public interface JsonTemplateRepo extends JpaRepository<JsonTemplate, Long> {
    
}
