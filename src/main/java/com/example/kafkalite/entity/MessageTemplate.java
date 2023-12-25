package com.example.kafkalite.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class MessageTemplate {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String templateName;
    private String templateContent;

    // Constructors, getters, and setters

    public MessageTemplate() {
        super();
    }

    public MessageTemplate(Long id, String templateName, String templateContent) {
        super();
        this.id = id;
        this.templateName = templateName;
        this.templateContent = templateContent;
    }

    
    public Long getId() {
        return id;
    }

    public String getTemplateName() {
        return templateName;
    }

    public String getTemplateContent() {
        return templateContent;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setTemplateName(String templateName) {
        this.templateName = templateName;
    }

    public void setTemplateContent(String templateContent) {
        this.templateContent = templateContent;
    }

    @Override
    public String toString() {
        return "MessageTemplate [id=" + id + ", templateName=" + templateName + ", templateContent=" + templateContent
                + "]";
    }
}

