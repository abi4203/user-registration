import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ loggedInUsername, title }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleUserClick = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleUserInfo = () => {
    navigate('/user-info');
    setDropdownOpen(false);
  };
  const handleSearch = () => {
    navigate('/search');
    setDropdownOpen(false);
  }
  const handleSignOut = () => {

    navigate('/');
    setDropdownOpen(false);
  };

  return (
    <nav>

      <p className="nav-title">{title}</p>
      <div className="user-info" onClick={handleUserClick}>
        {loggedInUsername}
        {isDropdownOpen && (
          <div className="dropdown-content">
            <p onClick={handleUserInfo}>User Info</p>
            <p onClick={handleSearch}>Search</p>
            <p onClick={handleSignOut}>Sign Out</p>
          </div>
        )}
      </div>

    </nav>
  );
};

export default Navbar;
