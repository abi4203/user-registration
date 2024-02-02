import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import UserService from '../api/UserService';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
    console.log('Logging in with:', username, password);
    try {
      const creds = { username, password }; // NEED TO ASK THE USER FOR USERNAME AND NOT EMAIL
      const resp = UserService.checkUser(creds).then((response) => {
        console.log(response.data);
      })
      setLoginError('');
    }
    catch {
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
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        <br />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />

        <NavLink className='button' to='/search' onClick={handleLogin} >
          Login
        </NavLink>
        {/* not use button istead use nav link but there is a problem  work with ui u will know */}
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
