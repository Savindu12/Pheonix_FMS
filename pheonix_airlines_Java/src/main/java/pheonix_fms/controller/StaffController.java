package com.arjuncodes.PheonixAirlinesystem.controller;

import com.arjuncodes.PheonixAirlines.model.User;
import com.arjuncodes.PheonixAirlines.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/User")
@RequestMapping("/Staff")
@CrossOrigin
public class UserController {
    @Autowired
    private UserService UserService;
    private StaffService StaffService;

    @PostMapping("/add")
    public String add(@RequestBody Staff staff1){
        StaffService.saveStaff1(staff1);
        return "New Staff member is added (Grade 1)";
    }

    public String add(@RequestBody Staff staff2){
        StaffService.saveStaff2(staff2);
        return "New Staff member is added (Grade 2)";
    }

    public String add(@RequestBody User user){
        UserService.saveUser(user);
        return "New user is added";
    }

    @GetMapping("/getAllStaffGrade1")
    public List<Staff1> list(){
        return StaffService.getAllStaff();
    }

    @GetMapping("/getAllStaffGrade2")
    public List<Staff2> list(){
        return StaffService.getAllStaff();
    }

    @GetMapping("/getAllUsers")
    public List<User> list(){
        return UserService.getAllUsers();
    }
}
