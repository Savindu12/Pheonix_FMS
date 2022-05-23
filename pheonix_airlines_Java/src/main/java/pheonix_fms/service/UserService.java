package com.arjuncodes.PheonixAirlinesystem.service;

import com.arjuncodes.PheonixAirlinesystem.model.User;

import java.util.List;

public interface UserService {
    public User saveStudent(User user);
    public List<User> getAllUsers();
}
