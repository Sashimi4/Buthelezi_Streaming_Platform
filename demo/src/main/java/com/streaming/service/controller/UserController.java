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

    @PutMapping("users/profile")
    @ResponseBody
    public ResponseEntity<User> updateUser(@RequestBody User user) {
        User foundUser = userService.retreiveUser(user);
        User updatedUser = userService.updateUser(foundUser, user);
        return new ResponseEntity<>(updatedUser, HttpStatus.ACCEPTED);
    }

    @PostMapping("users/registration")
    @ResponseBody
    public ResponseEntity<User> registrateUser(@RequestBody User user) {
        if(userService.saveUser(user)) {
            return new ResponseEntity<>(user, HttpStatus.CREATED);
        }
        return new ResponseEntity<>(user, HttpStatus.CONFLICT);
    }

    @PostMapping("users/login")
    @ResponseBody
    public ResponseEntity<User> loginUser(@RequestBody User user) {
        User foundUser = userService.retreiveUser(user);
        if(userService.verifyUser(foundUser, user)) {
            return new ResponseEntity<>(foundUser, HttpStatus.ACCEPTED);
        }
        return new ResponseEntity<>(user, HttpStatus.NOT_FOUND);
    }
}
