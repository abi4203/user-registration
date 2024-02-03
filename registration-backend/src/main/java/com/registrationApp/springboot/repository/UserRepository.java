package com.registrationApp.springboot.repository;

import com.registrationApp.springboot.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long>{
    //all crud database methods
    List<User> findByUsername(String username);
    List<User> findByFirstName(String firstName);
    List<User> findByLastName(String lastName);
    List<User> findByDepartment(String department);
    List<User> findByCollegeName(String collegeName);
    List<User> findByGender(String gender);
    List<User> findByEmail(String email);
    List<User> findByPhoneNumber(String phoneNumber);
    List<User> findByYear(String year);
    Optional<User> findByUsernameAndPassword(String username, String password);
}
