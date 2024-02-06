package com.registrationApp.springboot.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Tempusers")
public class Tempuser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "user_name")
    private String username;
    @Column(name = "email_id")
    private String email;
    @Column(name = "password")
    private String password;
    @Column(name = "first_name"     )
    private String firstName;
    @Column(name = "last_name")
    private String lastName;
    @Column(name = "date_of_birth")
    private LocalDate dob;
    @Column(name = "college_name")
    private String collegeName;
    @Column(name = "department")
    private String department;
    @Column(name = "year")
    private String year;
    @Column(name = "phone_number")
    private String phoneNumber;
    @Column(name = "gender")
    private String gender;

}
