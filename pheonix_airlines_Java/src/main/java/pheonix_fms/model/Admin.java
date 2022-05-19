package com.arjuncodes.pheonixAirlinesystem.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Admin {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int AdminId;
    private String AdminName;
    private String AdminAddress;

    public Admin() {
    }

    public int getId() {
        return AdminId;
    }

    public void setId(int AdminId) {
        this.id = AdminId;
    }

    public String getName() {
        return AdminName;
    }

    public void setName(String AdminName) {
        this.name = AdminName;
    }

    public String getAddress() {
        return AdminAddress;
    }

    public void setAddress(String AdminAddress) {
        this.address = AdminAddress;
    }
}
