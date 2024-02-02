import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import UserService from '../api/UserService';
import Login from './Login';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [collegeName, setCollegeName] = useState('');
  const [department, setDepartment] = useState('');
  const [year, setYear] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('');

  let navigate = useNavigate();

  const [usernameError, setUsernameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [confirmPasswordError, setConfirmPasswordError] = useState(null);
  const [firstNameError, setFirstNameError] = useState(null);
  const [lastNameError, setLastNameError] = useState(null);
  const [dobError, setDobError] = useState(null);
  const [collegeNameError, setCollegeNameError] = useState(null);
  const [departmentError, setDepartmentError] = useState(null);
  const [yearError, setYearError] = useState(null);
  const [phoneNumberError, setPhoneNumberError] = useState(null);
  const [genderError, setGenderError] = useState(null);

  const departments = ['Computer Science', 'Electrical Engineering', 'Mechanical Engineering', 'Civil Engineering'];
  const years = ['First Year', 'Second Year', 'Third Year', 'Fourth Year'];
  const genders = ['Male', 'Female', 'Other'];

  const validateForm = () => {
    // Username validation
    const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
    if (!usernameRegex.test(username)) {
      setUsernameError('Invalid username format (3-20 characters, alphanumeric or underscore).');
      return false;
    } else {
      setUsernameError(null);
    }
  
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Invalid email format.');
      return false;
    } else {
      setEmailError(null);
    }
  
    // Password validation
    const passwordRegex = /^.{6,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError('Invalid password format (at least 6 characters).');
      return false;
    } else {
      setPasswordError(null);
    }
  
    // Confirm Password validation
    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match.');
      return false;
    } else {
      setConfirmPasswordError(null);
    }
  
    // First Name validation
    if (!firstName.trim()) {
      setFirstNameError('First Name is required.');
      return false;
    } else {
      setFirstNameError(null);
    }
  
    // Last Name validation
    if (!lastName.trim()) {
      setLastNameError('Last Name is required.');
      return false;
    } else {
      setLastNameError(null);
    }
  
    // Date of Birth validation
    if (!dob.trim()) {
      setDobError('Date of Birth is required.');
      return false;
    } else {
      setDobError(null);
    }
  
    // College Name validation
    if (!collegeName.trim()) {
      setCollegeNameError('College Name is required.');
      return false;
    } else {
      setCollegeNameError(null);
    }
  
    // Department validation
    if (!department) {
      setDepartmentError('Department is required.');
      return false;
    } else {
      setDepartmentError(null);
    }
  
    // Year validation
    if (!year) {
      setYearError('Year is required.');
      return false;
    } else {
      setYearError(null);
    }
  
    // Phone Number validation
    const phoneNumberRegex = /^\d{10}$/;
    if (!phoneNumberRegex.test(phoneNumber)) {
      setPhoneNumberError('Invalid phone number format (10 digits).');
      return false;
    } else {
      setPhoneNumberError(null);
    }
  
    // Gender validation
    if (!gender) {
      setGenderError('Gender is required.');
      return false;
    } else {
      setGenderError(null);
    }
  
    return true;
  };
  

  const handleRegister = (e) => {
    // Implement your registration logic here
    console.log('Registering with:', username, email, password, firstName, lastName, dob, collegeName, department, year, phoneNumber,
      gender);

    // Calling the function to check username, email, and password
    if (validateForm()) {
      // This is the API call I will be using to call the function in UserService.js
      e.preventDefault(); // Prevents page refresh

      // The below details need to be added if any extra details are needed
      const user = {
        username, email, password, firstName, lastName, dob,
        collegeName, department, year, phoneNumber, gender
      };

      UserService.createUser(user).then((response) => {
        console.log(response.data);
        navigate(<Login/>);
      });
    }

    // Successful registration, and the user should log in now
  };

  return (
    <div>
      <h2>Register</h2>
      <p>Create your account</p>

      <form>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        <div className='error-message' style={{ color: 'red' }}>{usernameError}</div>

         
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <div className='error-message' style={{ color: 'red' }}>{emailError}</div>

         
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <div className='error-message' style={{ color: 'red' }}>{passwordError}</div>

         
        <label>Confirm Password:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <div className='error-message' style={{ color: 'red' }}>{confirmPasswordError}</div>

         
        <label>First Name:</label>
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <div className='error-message' style={{ color: 'red' }}>{firstNameError}</div>

         
        <label>Last Name:</label>
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <div className='error-message' style={{ color: 'red' }}>{lastNameError}</div>

         
        <label>Date of Birth:</label>
        <input type="text" value={dob} onChange={(e) => setDob(e.target.value)} />
        <div className='error-message' style={{ color: 'red' }}>{dobError}</div>

         
        <label>College Name:</label>
        <input type="text" value={collegeName} onChange={(e) => setCollegeName(e.target.value)} />
        <div className='error-message' style={{ color: 'red' }}>{collegeNameError}</div>

         

        <label>Department:</label>
        <select value={department} onChange={(e) => setDepartment(e.target.value)}>
          <option value="" disabled>Select Department</option>
          {departments.map((dept) => (
            <option key={dept} value={dept}>{dept}</option>
          ))}
        </select>
        <div className='error-message' style={{ color: 'red' }}>{departmentError}</div>

         

        <label>Year:</label>
        <select value={year} onChange={(e) => setYear(e.target.value)}>
          <option value="" disabled>Select Year</option>
          {years.map((yr) => (
            <option key={yr} value={yr}>{yr}</option>
          ))}
        </select>
        <div className='error-message' style={{ color: 'red' }}>{yearError}</div>


        <label>Phone Number:</label>
        <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        <div className='error-message' style={{ color: 'red' }}>{phoneNumberError}</div>

         
        <label>Gender:</label>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="" disabled>Select Gender</option>
          {genders.map((gen) => (
            <option key={gen} value={gen}>{gen}</option>
          ))}
        </select>
        <div className='error-message' style={{ color: 'red' }}>{genderError}</div>
         


        <button type="button" onClick={(e) => handleRegister(e)}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
