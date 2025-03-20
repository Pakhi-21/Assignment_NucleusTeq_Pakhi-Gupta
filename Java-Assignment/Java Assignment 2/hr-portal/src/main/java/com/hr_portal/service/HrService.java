package com.hr_portal.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hr_portal.repository.HrRepository;

@Service
public class HrService {

    @Autowired
    private HrRepository hrRepo;

    public boolean authenticate(String email, String password) {
        return hrRepo.findByEmailAndPassword(email, password).isPresent();
    }
    
}
