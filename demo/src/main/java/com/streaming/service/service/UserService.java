package com.streaming.service.service;

import com.streaming.service.data.User;
import com.streaming.service.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class UserService {

    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;

    public UserService(@Autowired UserRepository userRepository, @Autowired PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    //Methods under

    public boolean saveUser(User user) {
        if(isAlreadyRegistered(user)) {
            return false;
        }
        try {
            getUserRepository().save(new User(user.email, user.password)); //goal is that it then get's encoded
            return true;
        }catch (IllegalArgumentException ie) {
            return false;
        }
    }

    public User retreiveUser(User user) {
        return getUserRepository().findByEmail(user.email);
    }

    public boolean verifyUser(User foundUser, User givenUser) {
        return passwordEncoder.matches(givenUser.getPassword(), foundUser.getPassword());
    }

    public User updateUser(User foundUser, User givenUser) {
        foundUser.setUsername(givenUser.username);
        foundUser.setEmail(givenUser.email);
        return getUserRepository().save(foundUser);
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
