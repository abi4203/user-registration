import React, { useState } from 'react';
import UserService from '../api/UserService';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
    console.log('Logging in with:', email, password);
    try{
    const creds = {username,password}; // NEED TO ASK THE USER FOR USERNAME AND NOT EMAIL
    const resp = UserService.checkUser(creds).then((response)=>{
      console.log(response.data);
    })
    setLoginError('');
    }
    catch{
      console.log("error");
      setLoginError('Invalid username or password');
    }
// go to search page only if it is valid
// route the pages to start checking
// read all the values from register.js so it can be entered into the table and checked
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
