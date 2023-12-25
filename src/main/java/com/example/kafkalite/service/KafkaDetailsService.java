package com.example.kafkalite.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.kafkalite.entity.KafkaDetails;
import com.example.kafkalite.repo.KafkaDetailsRepo;

import java.util.List;

@Service
public class KafkaDetailsService {

    private final KafkaDetailsRepo detailsRepository;

    @Autowired
    public KafkaDetailsService(KafkaDetailsRepo detailsRepository) {
        this.detailsRepository = detailsRepository;
    }

    public List<KafkaDetails> getAllDetails() {
        return detailsRepository.findAll();
    }

    public KafkaDetails saveDetails(KafkaDetails details) {
        return detailsRepository.save(details);
    }
}
