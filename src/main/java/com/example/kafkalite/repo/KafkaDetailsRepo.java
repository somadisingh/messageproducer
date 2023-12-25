package com.example.kafkalite.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.kafkalite.entity.KafkaDetails;

public interface KafkaDetailsRepo extends JpaRepository<KafkaDetails, Long> {
    // Custom queries or methods can be added here if needed
}
