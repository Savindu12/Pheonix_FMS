package com.PheonixAirlinesystem.service;

import com.PheonixAirlinesystem.model.Student;
import com.PheonixAirlinesystem.repository.StaffRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StaffServiceImpl implements StaffService {

    @Autowired
    private StaffRepository staffRepository;

    @Override
    public Staff saveStaff(Staff staff1) {
        return StaffRepository.save(staff1);
    }

    @Override
    public List<staff1> getAllStaff() {
        return staffRepository.findAll();
    }


    
    
    @Override
    public Staff saveStaff(Staff Staff2) {
        return StaffRepository.save(staff2);
    }

    @Override
    public List<staff2> getAllStaff() {
        return staffRepository.findAll();
    }
}
