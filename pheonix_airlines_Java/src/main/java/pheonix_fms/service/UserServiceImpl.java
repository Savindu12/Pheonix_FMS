package com.arjuncodes.PheonixAirlinesystem.service;

import com.arjuncodes.PheonixAirlinesystem.model.User;
import com.arjuncodes.PheonixAirlinesystem.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public User saveUser(User user) {
        return UserRepository.save(user);
    }

    @Override
    public List<user> getAllUsers() {
        return userRepository.findAll();
    }
}
