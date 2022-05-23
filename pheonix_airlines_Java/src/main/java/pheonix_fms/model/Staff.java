package com.arjuncodes.pheonixAirlinesystem.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Staff {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int StaffId;
    private String StaffName;
    private String StaffAddress;

    public Staff() {
    }

    public int getId() {
        return StaffId;
    }

    public void setId(int StaffId) {
        this.id = StaffId;
    }

    public String getName() {
        return StaffName;
    }

    public void setName(String StaffName) {
        this.name = StaffName;
    }

    public String getAddress() {
        return StaffAddress;
    }

    public void setAddress(String StaffAddress) {
        this.address = StaffAddress;
    }
}