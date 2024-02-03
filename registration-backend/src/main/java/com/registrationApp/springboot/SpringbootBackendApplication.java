package com.registrationApp.springboot;

import com.registrationApp.springboot.model.User;
import com.registrationApp.springboot.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.time.LocalDate;

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
//		LocalDate temp1 = LocalDate.of(2003,10,9);
//		user.setFirstName("Srinitish");
//		user.setLastName("D");
//		user.setEmailId("dsrinitish@gmail.com");
//		user.setGender("Male");
//		user.setDepartment("Computer Science");
//		user.setCollegeName("PSG Itech");
//		user.setUsername("sri");
//		user.setPassword("123");
//		user.setPhoneNumber("9876543211");
//		user.setDateOfBirth(temp1);
//		userRepository.save(user);
//
//		User user1 = new User();
//		user1.setFirstName("abi");
//		user1.setLastName("v");
//		user1.setEmailId("av@gmail.com");
//		userRepository.save(user1);
	}
}
