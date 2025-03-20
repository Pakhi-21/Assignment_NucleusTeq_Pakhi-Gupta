package com.hr_portal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hr_portal.model.HR;
import com.hr_portal.service.HrService;

@RestController
@RequestMapping("/api/hr")
public class HrController {
    @Autowired
    private HrService hrService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody HR hr) {
        if (hrService.authenticate(hr.getEmail(), hr.getPassword())) {
            return ResponseEntity.ok("Login Successful");
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid Credentials");
    }
    
}
