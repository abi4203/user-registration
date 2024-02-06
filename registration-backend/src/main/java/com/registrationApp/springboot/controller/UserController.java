package com.registrationApp.springboot.controller;
import com.registrationApp.springboot.model.User;
import com.registrationApp.springboot.model.Tempuser;
import com.registrationApp.springboot.repository.TempUserRepository;
import com.registrationApp.springboot.repository.UserRepository;
import jakarta.transaction.Transactional;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true", exposedHeaders = "*", allowedHeaders = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
@RestController
@RequestMapping("api/v1/users")
@Transactional
public class UserController {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private TempUserRepository tempUserRepository;
    @GetMapping("")
    public List<Tempuser> getAllUsers(){
        return tempUserRepository.findAll();
    }

    @PostMapping("/createtemp")
    public Tempuser createUser(@RequestBody Tempuser Tempuser) {
        return tempUserRepository.save(Tempuser);
    }
    @PostMapping("/create")
    public User createUser(@RequestBody User user) {
        return userRepository.save(user);
    }
    @PostMapping("/find")
    public List<User> getSelectedUsers(@RequestBody SearchRequest searchRequest){
        return userRepository.findByFirstNameContaining(searchRequest.getSearchTerm());
    }
    @PostMapping("/findDept")
    public List<User> getSelectedUsersbyDept(@RequestBody SearchRequest searchRequest){
//        System.out.print(searchRequest.getSearchTerm());
        return userRepository.findByDepartmentContaining(searchRequest.getSearchTerm());
    }
    @PostMapping("/findCollege")
    public List<User> getSelectedUsersbyCollege(@RequestBody SearchRequest searchRequest){
        return userRepository.findByCollegeNameContaining(searchRequest.getSearchTerm());
    }
    @PostMapping("/findUsername")
    public List<User> getSelectedUsersbyUsername(@RequestBody SearchRequest searchRequest){
//        System.out.println(searchRequest.getSearchTerm());
        return userRepository.findByUsernameContaining(searchRequest.getSearchTerm());
    }
    @PostMapping("/findGender")
    public List<User> getSelectedUsersbyGender(@RequestBody SearchRequest searchRequest){
        return userRepository.findByGenderContaining(searchRequest.getSearchTerm());
    }
    @PostMapping("/findLastName")
    public List<User> getSelectedUsersbyLastName(@RequestBody SearchRequest searchRequest){
        return userRepository.findByLastNameContaining(searchRequest.getSearchTerm());
    }
    @PostMapping("/findEmail")
    public List<User> getSelectedUsersbyEmail(@RequestBody SearchRequest searchRequest){
        return userRepository.findByEmailContaining(searchRequest.getSearchTerm());
    }
    @PostMapping("/findPhone")
    public List<User> getSelectedUsersbyPhone(@RequestBody SearchRequest searchRequest){
        return userRepository.findByPhoneNumberContaining(searchRequest.getSearchTerm());
    }
    @PostMapping("/findYear")
    public List<User> getSelectedUsersbyYear(@RequestBody SearchRequest searchRequest){
        return userRepository.findByYearContaining(searchRequest.getSearchTerm());
    }
    @PostMapping("/delete")
    public void deleteUserByUsername(@RequestBody SearchRequest searchRequest){
//        System.out.print("nirmal koo");
        tempUserRepository.deleteByUsername(searchRequest.getSearchTerm());
        return ;
    }
    @PostMapping("/check")
    public String checkUser(@RequestBody LoginRequest loginRequest){
        System.out.print(loginRequest.getPassword());
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
    @Getter
    @Setter
    static
    class SearchRequest{
        private String searchTerm;
    }
}
