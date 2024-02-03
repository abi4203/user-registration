package com.registrationApp.springboot.repository;

import com.registrationApp.springboot.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long>{
    //all crud database methods
    Optional<User> findByUsername(String username);
    List<User> findByFirstName(String firstName);
    Optional<User> findByUsernameAndPassword(String username, String password);
}
