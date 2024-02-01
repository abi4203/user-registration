package com.registrationApp.springboot.repository;

import com.registrationApp.springboot.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long>{
    //all crud database methods
}
