package com.example.kafkalite.repo;

import com.example.kafkalite.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsersRepo extends JpaRepository<Users, String> {
    
}
