package com.example.kafkalite.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.beans.factory.annotation.Autowired;
// //import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
// import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.http.ResponseEntity;
// import java.util.List;

// import com.example.kafkalite.entity.MessageTemplate;
// import com.example.kafkalite.service.MessageTemplateService;
// import com.example.kafkalite.entity.KafkaDetails;
// import com.example.kafkalite.service.KafkaDetailsService;
import com.example.kafkalite.service.KafkaService;

// @RestController
// @RequestMapping("/api")
// public class MessageController {

//     private final KafkaDetailsService kafkaDetailsService;
//     private final MessageTemplateService messageTemplateService;

//     @Autowired
//     public MessageController(KafkaDetailsService kafkaDetailsService, MessageTemplateService messageTemplateService) {
//         this.kafkaDetailsService = kafkaDetailsService;
//         this.messageTemplateService = messageTemplateService;
//     }

//     @GetMapping("/kafka-details")
//     public List<KafkaDetails> getAllKafkaDetails() {
//         return kafkaDetailsService.getAllDetails();
//     }

//     @PostMapping("/kafka-details")
//     public KafkaDetails saveKafkaDetails(@RequestBody KafkaDetails details) {
//         return kafkaDetailsService.saveDetails(details);
//     }

//     @GetMapping("/message-templates")
//     public List<MessageTemplate> getAllMessageTemplates() {
//         return messageTemplateService.getAllTemplates();
//     }

//     @PostMapping("/message-templates")
//     public MessageTemplate saveMessageTemplate(@RequestBody MessageTemplate template) {
//         return messageTemplateService.saveTemplate(template);
//     }

//     // Other methods as needed
// }

@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*", methods = {RequestMethod.GET, RequestMethod.POST})
@RestController
@RequestMapping("/message")
public class MessageController {

    @Autowired
    private KafkaService kafkaService;

    @PostMapping("/send")
    public ResponseEntity<?> sendMessage(@RequestBody String message) {
        this.kafkaService.produceMessage(message);
        return ResponseEntity.ok("Message sent!");

    }
}