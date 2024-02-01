import React, { useState } from 'react';
import UserService from '../api/UserService';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const validateForm = () => {
    const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^.{6,}$/;

    if (!usernameRegex.test(username)) {
      setRegistrationError('Invalid username format (3-20 characters, alphanumeric or underscore).');
      return false;
    }
    if (!emailRegex.test(email)) {
      setRegistrationError('Invalid email format.');
      return false;
    }
    if (!passwordRegex.test(password)) {
      setRegistrationError('Invalid password format (at least 6 characters).');
      return false;
    }
    if (password !== confirmPassword) {
      setRegistrationError('Passwords do not match.');
      return false;
    }
    setRegistrationError(null);

    return true;
  };

  const handleRegister = (e) => {
    // Implement your registration logic here
    console.log('Registering with:', username, email, password);

    //calling above function to check username,email and password
    if (validateForm()) {
      //this is the api call I will be using to call the function in UserService.js

      e.preventDefault();//does not refresh page

      //the below details i need da add if any extra needed and tell da
      const user = {firstName, lastName, age, email, username, password}

      UserService.createUser(user).then((response)=>{
        console.log(response.data)
      })
    }
    //successful registration and the user should login now da 

  };

  return (
    <div>
      <h2>Register</h2>
      <p>Create your account</p>
      <form>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        <br />
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <label>Confirm Password:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <br />

        <button type="button" onClick={(e)=>handleRegister(e)}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
