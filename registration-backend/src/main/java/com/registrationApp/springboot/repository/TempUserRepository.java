package com.registrationApp.springboot.repository;

import com.registrationApp.springboot.model.Tempuser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
public interface TempUserRepository extends JpaRepository<Tempuser, Long> {
    // crud operations
    void deleteByUsername(String username);
}
