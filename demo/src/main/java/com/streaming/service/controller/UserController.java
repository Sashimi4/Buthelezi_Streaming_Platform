package com.streaming.service.controller;

import com.streaming.service.data.User;
import com.streaming.service.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class UserController {

    private final UserService userService;

    public UserController(@Autowired UserService userService){
        this.userService= userService;
    }

    //Test endpoint for test us
    @GetMapping("profile")
    @ResponseBody
    public User getTempUser() {
        return new User(UUID.randomUUID(),"cool.guy@gmail.com","Jimmy5","https://i.pinimg.com/736x/09/5b/64/095b641e4ec37c558328c2dcf8d7cefc.jpg","1234Pass");
    }


    //Test endpoint
    @GetMapping("allusers")
    @ResponseBody
    public List<User> getAllUser() {
        return userService.getAllUsers();
    }


    @PostMapping("users/registration")
    @ResponseBody
    public ResponseEntity<User> registrateUser(@RequestBody User user) {
        if(userService.registerUser(user)) {
            return new ResponseEntity<>(user, HttpStatus.CREATED);
        }
        return new ResponseEntity<>(user, HttpStatus.CONFLICT);
    }


    //Test endpoint for test us
    @PostMapping("login")
    @ResponseBody
    public ResponseEntity<String> loginUser(@RequestHeader("Authorization") String content) {
        System.out.println(content);
        return new ResponseEntity<>("content", HttpStatus.ACCEPTED);
    }
}
