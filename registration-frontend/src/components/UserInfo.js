// UserInfo.js

import Navbar from "./Navbar";
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaArrowCircleLeft } from 'react-icons/fa';
import UserService from '../api/UserService';
import './UserInfo.css';

function UserInfo({ loggedInUsername }) {
  const navigate = useNavigate();
  const location = useLocation();
  const username = location.state.username;
  const [user, setuser] = useState([]);

  const handleBackClick = () => {
    navigate('/search', { state: { username } });
  };

  useEffect(() => {
    Myinfo();
  }, [username]);

  const Myinfo = () => {
    const searchTerm = username;
    const creds = { searchTerm };

    UserService.findUserbyUsername(creds)
      .then((response) => {
        setuser(response.data);
      });
  };

  return (
    <>
      <Navbar title={'User Information'} loggedInUsername={username} />
      <div className="user-info-container">
        <p className="back-button" onClick={handleBackClick}><FaArrowCircleLeft size={24} /></p>

        {user.map((user) => (
          <div key={user.username} className="user-initial-container">
            <div className="user-initial-circle">
              <p className="user-initial">{user.username.charAt(0)}</p>
            </div>
            <div className="user-info-details">
              <p className="user-info-item">{user.username}</p>
              <p className="user-info-item">{user.email}</p>
            </div>
          </div>
        ))}


        <form className="user-details-form">
          {user.map((user) => (
            <>
              <div className="form-column">
                <label htmlFor="firstName" className="form-label">First Name:</label>
                <input type="text" id="firstName" value={user.firstName} readOnly className="form-input" />

                <label htmlFor="collegeName" className="form-label">College Name:</label>
                <input type="text" id="collegeName" value={user.collgeName} readOnly className="form-input" />

                <label htmlFor="dob" className="form-label">Date of Birth:</label>
                <input type="text" id="dob" value={user.dob} readOnly className="form-input" />

                <label htmlFor="phoneNumber" className="form-label">Phone Number:</label>
                <input type="text" id="phoneNumber" value={user.phoneNumber} readOnly className="form-input" />
              </div>

              <div className="form-column">
                <label htmlFor="lastName" className="form-label">Last Name:</label>
                <input type="text" id="lastName" value={user.lastName} readOnly className="form-input" />

                <label htmlFor="department" className="form-label">Department:</label>
                <input type="text" id="department" value={user.department} readOnly className="form-input" />

                <label htmlFor="year" className="form-label">Year:</label>
                <input type="text" id="year" value={user.year} readOnly className="form-input" />

                <label htmlFor="gender" className="form-label">Gender:</label>
                <input type="text" id="gender" value={user.gender} readOnly className="form-input" />
              </div>
            </>
          ))}
        </form>
      </div>
    </>
  );
}

export default UserInfo;
