package com.arjuncodes.PheonixAirlinesystem.repository;

import com.arjuncodes.PheonixAirlinesystem.model.Staff;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StaffRepository extends JpaRepository<Staff,Integer> {
}
