import React from 'react';
import './UserRegister.css';
import Register from './Register';

const UserRegister = () => {
    return (
        <div>
            <h2>User Registration</h2>
            <div className="grid-container">
                <div className="column">1</div>
                <div className="login">2
                    <Register />
                </div>
                <div className="column">3
                    <h3> Already have an account?
                        <button type="button" >
                            Login
                        </button>
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default UserRegister;
