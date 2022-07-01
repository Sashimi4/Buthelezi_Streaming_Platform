package com.streaming.service.service;

import com.streaming.service.data.User;
import com.streaming.service.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(@Autowired UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    //Methods under


    public List<User> getAllUsers() {
        return getUserRepository().findAll();
    }


    //Methods above

    public UserRepository getUserRepository() {
        return userRepository;
    }
}
