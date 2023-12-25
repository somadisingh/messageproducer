package com.example.kafkalite.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;


@Entity
public class Users {

    @Id
    @Column(nullable = false, name="Username")
    private String username;

    @Column(nullable = false, name="Password")
    private String password;

    @Column(nullable = false, name="Role")
    private String role;

    public Users() {
        super();
    }

    public Users(String username, String password, String role) {
        super();
        this.username = username;
        this.password = password;
        this.role = role;

    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setpassword(String password) {
        this.password = password;
    }

    public String getrole() {
        return role;
    }

    public void setrole(String role) {
        this.role = role;
    }

    @Override
    public String toString() {
        return "Users [username=" + username + ", password=" + password + ", role=" + role + "]";
    }
    
}
