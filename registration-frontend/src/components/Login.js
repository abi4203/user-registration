import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';
import UserService from '../api/UserService';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');;
  const [invalid, setInvalid] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    try {
      setInvalid(false);
      const creds = { username, password };
      UserService.checkUser(creds).then((response) => {
      if(response.data===true){
        navigate("/search", {state:{username}});
      }
      else{
        setInvalid(true);
      }
      })
    }
    catch {
      console.log("error");
    }
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

        {/* <NavLink className='button' to='/search' onClick={handleLogin} >
          Login
        </NavLink> */}
        {/* not use button istead use nav link but there is a problem  work with ui u will know */}
        <button type="button" onClick={handleLogin}>
          Login
        </button>
        {invalid && (
          <div>
            <p>Invalid Username/Password!!</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default Login;
