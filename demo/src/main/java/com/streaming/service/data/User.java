package com.streaming.service.data;

//import com.fasterxml.jackson.annotation.JsonIgnore;
//import org.hibernate.annotations.Entity;
//import org.springframework.data.annotation.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import javax.persistence.Column;
//import javax.persistence.GeneratedValue;
//import javax.persistence.Table;
import java.util.UUID;

//@Entity
//@Table(name = "users")
public class User {

    //@Id
    //@GeneratedValue
    private UUID id;

    //@Column(nullable = false)
    public String username;

    //@Column(nullable = false, unique = true)
    public String email;

    //@Column(nullable = false)
    public String imgUrl;

    //@JsonIgnore
    //@Column(nullable = false)
    public String password;

    public User() {}

    public User(String email, String username, String imgUrl, String password) {
        this.username = username;
        this.email = email;
        this.imgUrl = imgUrl;
        this.password = new BCryptPasswordEncoder().encode(password);
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
