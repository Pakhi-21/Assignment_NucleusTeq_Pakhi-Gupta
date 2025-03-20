package com.hr_portal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hr_portal.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee,Long>  {
    
}
