package com.PheonixAirlinesystem.service;

import com.PheonixAirlinesystem.model.Admin;

import java.util.List;

public interface AdminService {
    public Admin saveStudent(Admin admin);
    public List<Admin> getAllAdmins();
}
