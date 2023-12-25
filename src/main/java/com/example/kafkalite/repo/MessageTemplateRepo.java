package com.example.kafkalite.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.kafkalite.entity.MessageTemplate;

public interface MessageTemplateRepo extends JpaRepository<MessageTemplate, Long> {
    // Custom queries or methods can be added here if needed
}
