package com.registrationApp.springboot.repository;

import com.registrationApp.springboot.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long>{
    //all crud database methods
    List<User> findByUsernameContaining(String username);
    List<User> findByFirstNameContaining(String firstName);
    List<User> findByLastNameContaining(String lastName);
    List<User> findByDepartmentContaining(String department);
    List<User> findByCollegeNameContaining(String collegeName);
    List<User> findByGenderContaining(String gender);
    List<User> findByEmailContaining(String email);
    List<User> findByPhoneNumberContaining(String phoneNumber);
    List<User> findByYearContaining(String year);
    Optional<User> findByUsernameAndPassword(String username, String password);
}


