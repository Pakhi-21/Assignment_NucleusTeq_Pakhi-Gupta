package com.hr_portal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hr_portal.model.HR;
import java.util.Optional;

@Repository
public interface HrRepository extends JpaRepository<HR,Long>{
    Optional<HR> findByEmailAndPassword(String email, String password);
    
}
