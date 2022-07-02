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

    public boolean registerUser(User user) {
        if(isAlreadyRegistered(user)) {
            return false;
        }
        try {
            getUserRepository().save(new User(user.email, user.password));
            return true;
        }catch (IllegalArgumentException ie) {
            return false;
        }
    }


    public boolean isAlreadyRegistered(User user) {
        return getUserRepository().findByEmail(user.email) != null;
    }


    public List<User> getAllUsers() {
        return getUserRepository().findAll();
    }

    //Methods above

    public UserRepository getUserRepository() {
        return userRepository;
    }
}
