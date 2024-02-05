import React, { useState } from 'react';
import './UserRegister.css';
import Register from './Register';
import Login from './Login';

const UserRegister = () => {
    const [isUserRegister, setUserRegister] = useState(true);

    const toggleForm = () => {
        setUserRegister(!isUserRegister);
    };

    return (
        <div className='register'>
            <h2 className='heading1'>User Registration</h2>
            <div className="grid-container">
                <div className="column">
                    {isUserRegister ? null : (
                        <>
                            <h3 className='margin'>
                                Don't have an account?</h3>

                            <button className="switch-button" type="button" onClick={toggleForm}>
                                Switch to Register
                            </button>
                        </>

                    )}
                </div>
                <div className="login">2
                    {isUserRegister ? <Register /> : <Login />}
                </div>
                <div className="column">
                    {isUserRegister ? (
                        <>
                            <h3 className='margin'>
                                Already have an account?
                            </h3>
                            <button className="switch-button" type="button" onClick={toggleForm}>
                                Switch to Login
                            </button>
                        </>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default UserRegister;
