package com.registrationApp.springboot.repository;

import com.registrationApp.springboot.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long>{
    //all crud database methods
    List<User> findByUsernameContainingIgnoreCase(String username);
    List<User> findByFirstNameContainingIgnoreCase(String firstName);
    List<User> findByLastNameContainingIgnoreCase(String lastName);
    List<User> findByDepartmentContainingIgnoreCase(String department);
    List<User> findByCollegeNameContainingIgnoreCase(String collegeName);
    List<User> findByGenderContainingIgnoreCase(String gender);
    List<User> findByEmailContaining(String email);
    List<User> findByPhoneNumberContaining(String phoneNumber);
    List<User> findByYearContainingIgnoreCase(String year);
    Optional<User> findByUsernameAndPassword(String username, String password);
}


