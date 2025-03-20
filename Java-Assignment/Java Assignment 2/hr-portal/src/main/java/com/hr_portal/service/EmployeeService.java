package com.hr_portal.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hr_portal.model.Employee;
import com.hr_portal.repository.EmployeeRepository;

import java.util.*;

@Service
public class EmployeeService {
    
  @Autowired
  private EmployeeRepository empRepository;

  public List<Employee> getAllEmployees() {
        return empRepository.findAll();
  }

  public Employee saveEmployee(Employee employee) {
    return empRepository.save(employee);
  }
  
  public Employee updateEmployee(Long id, Employee updatedEmployee) {
    return empRepository.findById(id).map(employee -> {
        employee.setName(updatedEmployee.getName());
        employee.setDepartment(updatedEmployee.getDepartment());
        employee.setEmail(updatedEmployee.getEmail());
        employee.setSalary(updatedEmployee.getSalary());
        return empRepository.save(employee);
    }).orElseThrow(() -> new RuntimeException("Employee not found"));
  }


  public void deleteEmployee(Long id) {
    empRepository.deleteById(id);
  }


}
