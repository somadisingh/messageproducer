package com.example.kafkalite.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMethod;

import com.example.kafkalite.entity.MessageTemplate;
import com.example.kafkalite.service.MessageTemplateService;

@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*", methods = {RequestMethod.GET, RequestMethod.POST})
@RestController
@RequestMapping("/save")
public class SaveTemplateController {
    
    @Autowired
    private MessageTemplateService messageTemplateService;

    @PostMapping("/template")
    public MessageTemplate saveMessageTemplate(@RequestBody MessageTemplate template) {
        return messageTemplateService.saveTemplate(template);
    }

}
