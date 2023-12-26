package com.example.kafkalite.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMethod;

import com.example.kafkalite.entity.MessageTemplate;
import com.example.kafkalite.service.MessageTemplateService;

@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE})
@RestController
@RequestMapping("/template")
public class SaveTemplateController {
    
    @Autowired
    private MessageTemplateService messageTemplateService;

    @PostMapping("/save")
    public MessageTemplate saveMessageTemplate(@RequestBody MessageTemplate template) {
        return messageTemplateService.saveTemplate(template);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteMessageTemplate(@PathVariable Long id) {
        messageTemplateService.deleteTemplate(id);
        return ResponseEntity.ok("Template deleted successfully");
    }

}
