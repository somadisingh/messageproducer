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

import com.example.kafkalite.entity.JsonTemplate;
import com.example.kafkalite.service.JsonTemplateService;

@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE})
@RestController
@RequestMapping("/template")
public class TemplateController {
    
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

    @Autowired
    private JsonTemplateService jsonMessageTemplateService;

    @PostMapping("/savejsontemplate")
    public JsonTemplate saveJsonMessageTemplate(@RequestBody JsonTemplate template) {
        return jsonMessageTemplateService.saveTemplate(template);
    }

    @DeleteMapping("/deletejsontemplate/{id}")
    public ResponseEntity<String> deleteJsonMessageTemplate(@PathVariable Long id) {
        jsonMessageTemplateService.deleteTemplate(id);
        return ResponseEntity.ok("JSON Template deleted successfully");
    }

}
