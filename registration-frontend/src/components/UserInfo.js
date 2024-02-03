import Navbar from "./Navbar";
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaArrowCircleLeft } from 'react-icons/fa';
import UserService from '../api/UserService';

function UserInfo({ loggedInUsername }) {
  const navigate = useNavigate();
  const location = useLocation();
  const username = location.state.username;
  const [user,setuser]= useState([]);
  

  const handleBackClick = () => {
    navigate('/search', {state:{username}});
  };

  useEffect(() => {
  }, [location.pathname]);

  useEffect(() => {
    Myinfo();
  }, [username]);

  const Myinfo = () => {
    const searchTerm = username;
    const creds = { searchTerm };
  
    UserService.findUserbyUsername(creds)
      .then((response) => {
        setuser(response.data);
      })
  };

  return (
    <div>
      <Navbar title={'User Information'} loggedInUsername={username} />
      <div>
      {user.map((user, index) => (
        <div key={index}>
            <p>Username  : {user.username}</p>
            <p>Email     : {user.email}</p>
            <p>First Name: {user.firstName}</p>
            <p>Last Name : {user.lastName}</p>
            <p>Date of Birth : {user.dob}</p>
            <p>Collge Name : {user.collgeName}</p>
            <p>Department: {user.department}</p>
            <p>Year : {user.year}</p>
            <p>Phone Number : {user.phoneNumber}</p>
            <p>Gender : {user.gender}</p>
        </div>
        ))}
      </div>
      <p onClick={handleBackClick}> <FaArrowCircleLeft size={24} color="#ff4500" /> </p>
    </div>

  );
}

export default UserInfo;
