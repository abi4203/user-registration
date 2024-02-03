package com.registrationApp.springboot.controller;
import com.registrationApp.springboot.model.User;
import com.registrationApp.springboot.repository.UserRepository;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true", exposedHeaders = "*", allowedHeaders = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
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
    @GetMapping("/find/{firstName}")
    public List<User> getSelectedUsers(@PathVariable String firstName){
        System.out.print(firstName);
        return userRepository.findByFirstName(firstName);
    }
    @PostMapping("/check")
    public String checkUser(@RequestBody LoginRequest loginRequest){
        User user = userRepository.findByUsernameAndPassword(
                loginRequest.getUsername(),
                loginRequest.getPassword()
        ).orElse(null);

        if (user != null) {
            return "true";
        } else {
            return "false";
        }

    }
    @Getter
    @Setter
    static
    class LoginRequest{
        private String username;
        private String password;
    }
}
