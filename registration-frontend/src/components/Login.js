import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserService from '../api/UserService';
// import './Register.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [invalid, setInvalid] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    try {
      setInvalid(false);
      setUsernameError('');
      setPasswordError('');

      const creds = { username, password };

      UserService.checkUser(creds).then((response) => {
        if (response.data === true) {
          if(username === "Admin"){
            // console.log(username);
            navigate("/admin");
          }
          else{
            navigate("/search", { state: { username } });
          }
        } else {
          setInvalid(true);
          setUsernameError('Invalid Username/Password!!');
        }
      });
    } catch {
      console.log("error");
    }
  };

  return (
    <div className="registration-container">
      <h2>Login</h2>
      <form className='registration-form'>
        <label>Username:</label>
        <input
          className={`register-input ${usernameError ? 'error-input' : ''}`}
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <br />
        <label>Password:</label>
        <input
          className={`register-input ${passwordError ? 'error-input' : ''}`}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError && <div className="error-message">{passwordError}</div>}
        <br />
        <button type="button" onClick={handleLogin} className='button'>
          Login
        </button>
        {usernameError && <div className="error-message">{usernameError}</div>}

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
