package com.registrationApp.springboot;

import com.registrationApp.springboot.model.User;
import com.registrationApp.springboot.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringbootBackendApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootBackendApplication.class, args);
	}
	@Autowired
	private UserRepository userRepository;
	@Override
	public void run(String... args) throws Exception {
//		User user = new User();
//		user.setFirstName("Srinitish");
//		user.setLastName("D");
//		user.setEmailId("dsrinitish@gmail.com");
//		userRepository.save(user);
//
//		User user1 = new User();
//		user1.setFirstName("abi");
//		user1.setLastName("v");
//		user1.setEmailId("av@gmail.com");
//		userRepository.save(user1);
	}
}
