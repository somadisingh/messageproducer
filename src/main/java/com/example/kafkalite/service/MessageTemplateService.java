package com.example.kafkalite.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.kafkalite.entity.MessageTemplate;
import com.example.kafkalite.repo.MessageTemplateRepo;

import java.util.List;

@Service
public class MessageTemplateService {

    private final MessageTemplateRepo templateRepository;

    @Autowired
    public MessageTemplateService(MessageTemplateRepo templateRepository) {
        this.templateRepository = templateRepository;
    }

    public List<MessageTemplate> getAllTemplates() {
        return templateRepository.findAll();
    }

    public MessageTemplate saveTemplate(MessageTemplate template) {
        return templateRepository.save(template);
    }
}
