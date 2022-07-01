package com.streaming.service.data;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue
    private UUID uuidd;

    @Column(nullable = false)
    public String username;

    @Column(nullable = false, unique = true)
    public String email;

    @Column(nullable = true)
    public String imgUrl;

    @JsonIgnore
    @Column(nullable = false)
    public String password;

    public User() {}

    public User(UUID uuid,String email, String username, String imgUrl, String password) {
        this.uuidd = uuid;
        this.username = username;
        this.email = email;
        this.imgUrl = imgUrl;
        this.password = new BCryptPasswordEncoder().encode(password);
    }

    public UUID getUuidd() {
        return uuidd;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
