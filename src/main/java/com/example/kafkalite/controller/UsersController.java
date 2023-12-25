package com.example.kafkalite.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMethod;
import java.util.Map;

import com.example.kafkalite.entity.Users;
import com.example.kafkalite.repo.UsersRepo;

@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*", methods = {RequestMethod.GET, RequestMethod.POST})
@RestController
@RequestMapping("/kafka-api/users")
public class UsersController {
    @Autowired
    private UsersRepo userInfoRepo;

    @PostMapping("/login")
    public ResponseEntity<String>login(@RequestBody Map<String, String> credentials) {
        
        String username = credentials.get("username");
        String password = credentials.get("password");

        Users users = userInfoRepo.findById(username).orElse(null);

        if (users !=null && users.getPassword().equals(password)) {
            return ResponseEntity.ok(users.getrole());
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid Credentials!");
        }

    }

}
