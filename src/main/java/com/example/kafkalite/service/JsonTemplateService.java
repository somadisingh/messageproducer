package com.example.kafkalite.service;

//import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.kafkalite.entity.JsonTemplate;
import com.example.kafkalite.repo.JsonTemplateRepo;

import java.util.List;

@Service
public class JsonTemplateService {

    private final JsonTemplateRepo templateRepository;

    //@Autowired
    public JsonTemplateService(JsonTemplateRepo templateRepository) {
        this.templateRepository = templateRepository;
    }

    public List<JsonTemplate> getAllTemplates() {
        return templateRepository.findAll();
    }

    public JsonTemplate saveTemplate(JsonTemplate template) {
        return templateRepository.save(template);
    }

    public void deleteTemplate(Long templateId) {
        templateRepository.deleteById(templateId);
    }
    
}
