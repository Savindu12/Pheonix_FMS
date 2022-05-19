package com.arjuncodes.PheonixAirlinesystem.repository;

import com.arjuncodes.PheonixAirlinesystem.model.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminRepository extends JpaRepository<Admin,Integer> {
}