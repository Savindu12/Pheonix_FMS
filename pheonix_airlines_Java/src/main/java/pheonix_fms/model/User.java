package com.arjuncodes.pheonixAirlinesystem.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int UserId;
    private String UserName;
    private String UserAddress;

    public User() {
    }

    public int getId() {
        return UserId;
    }

    public void setId(int UserId) {
        this.id = UserId;
    }

    public String getName() {
        return UserName;
    }

    public void setName(String UserName) {
        this.name = UserName;
    }

    public String getAddress() {
        return UserAddress;
    }

    public void setAddress(String UserAddress) {
        this.address = UserAddress;
    }
}
