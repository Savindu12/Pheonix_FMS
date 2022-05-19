package com.arjuncodes.PheonixAirlinesystem.controller;

import com.arjuncodes.PheonixAirlines.model.User;
import com.arjuncodes.PheonixAirlines.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/User")
@CrossOrigin
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/add")
    public String add(@RequestBody User user){
        UserService.saveStudent(user);
        return "New user is added";
    }

    @GetMapping("/getAll")
    public List<User> list(){
        return UserService.getAllUsers();
    }
}
