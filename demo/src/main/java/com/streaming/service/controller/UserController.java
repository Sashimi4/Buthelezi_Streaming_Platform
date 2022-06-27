package com.streaming.service.controller;

import com.streaming.service.data.Movie;
import com.streaming.service.data.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {

    public UserController(){
    }

    //Test endpoint for test us
    @GetMapping("profile/")
    @CrossOrigin(origins = "http://localhost:8080")
    @ResponseBody
    public User getTempUser() {
        return new User("cool.guy@gmail.com","Jimmy5","https://i.pinimg.com/736x/09/5b/64/095b641e4ec37c558328c2dcf8d7cefc.jpg","1234Pass");
    }


    //Test endpoint for test us
    @PostMapping("login/")
    @CrossOrigin(origins = "http://localhost:8080")
    @ResponseBody
    public ResponseEntity<String> loginUser(@RequestHeader("Authorization") String content) {
        System.out.println(content);
        return new ResponseEntity<>("content", HttpStatus.ACCEPTED);
    }
}
