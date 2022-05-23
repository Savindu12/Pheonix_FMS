package com.arjuncodes.PheonixAirlinesystem.repository;

import com.arjuncodes.PheonixAirlinesystem.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User,Integer> {
}
