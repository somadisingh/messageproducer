package com.example.kafkalite.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Column;

@Entity
public class JsonTemplate {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String jsontemplateName;

    @Column(columnDefinition = "JSON")
    private String jsontemplateContent;

    //private String key;

    @Column(columnDefinition = "JSON")
    private String header;

    private String jsonKey;

    // Constructors, getters, and setters

    public JsonTemplate() {
        super();
    }

    public JsonTemplate(Long id, String jsontemplateName, String jsontemplateContent, String header, String jsonKey) {
        super();
        this.id = id;
        this.jsontemplateName = jsontemplateName;
        this.jsontemplateContent = jsontemplateContent;
        this.header = header;
        this.jsonKey = jsonKey;
    }

    public Long getId() {
        return id;
    }

    public String getJsontemplateName() {
        return jsontemplateName;
    }

    public String getJsontemplateContent() {
        return jsontemplateContent;
    }

    public String getJsonKey() {
        return jsonKey;
    }

    public String getHeader() {
        return header;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setJsontemplateName(String jsontemplateName) {
        this.jsontemplateName = jsontemplateName;
    }

    public void setJsontemplateContent(String jsontemplateContent) {
        this.jsontemplateContent = jsontemplateContent;
    }

    public void setJsonKey(String jsonKey) {
        this.jsonKey = jsonKey;
    }

    public void setHeader(String header) {
        this.header = header;
    }

    @Override
    public String toString() {
        return "JsonTemplate [id=" + id + ", jsontemplateName=" + jsontemplateName + ", jsontemplateContent=" + jsontemplateContent + ", header=" + header
                + ", jsonKey=" + jsonKey + "]";
    }
}
