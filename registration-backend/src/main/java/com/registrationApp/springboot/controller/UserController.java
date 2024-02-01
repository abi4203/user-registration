package com.registrationApp.springboot.controller;
import com.registrationApp.springboot.model.User;
import com.registrationApp.springboot.repository.UserRepository;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@RestController
@RequestMapping("api/v1/users")
public class UserController {
    @Autowired
    private UserRepository userRepository;
    @GetMapping("")
    public List<User> getAllUsers(){
        return userRepository.findAll();
    }
    @PostMapping("/create")
    public User createUser(@RequestBody User user) {
        return userRepository.save(user);
    }
    @PostMapping("/check")
    public String checkUser(LoginRequest loginRequest){
//      check the below condition to be working or not
//      before adding all the details to table check with basic to check if working or not
        User user = userRepository.findByUsernameAndPassword(loginRequest.getUsername(), loginRequest.getPassword())
                .orElseThrow(() -> new UnauthorizedException("Invalid username or password"));

        return "Authentication successful for user: " + user.getUsername();

    }
    static class UnauthorizedException extends RuntimeException {
        public UnauthorizedException(String message) {
            super(message);
        }
    }
    @Getter
    @Setter
    static
    class LoginRequest{
        private String Username;
        private String Password;
    }
}
