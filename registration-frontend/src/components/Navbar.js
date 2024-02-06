import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ loggedInUsername, title,Search }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setDropdownOpen(false);
  }, [location.pathname]);

  // useEffect(() => {
  //   const handleOutsideClick = (e) => {
  //     if (!e.target.closest('.user-info')) {
  //       setDropdownOpen(false);
  //     }
  //   };

  //   document.addEventListener('click', handleOutsideClick);

  //   return () => {
  //     document.removeEventListener('click', handleOutsideClick);
  //   };
  // }, [isDropdownOpen]);

  const username = loggedInUsername;

  const handleUserClick = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleUserInfo = () => {
    navigate('/user-info', { state: { username } });
    setDropdownOpen(false);
  };
  const handleSearch = () => {
    navigate('/search', { state: { username } });
    setDropdownOpen(false);
  }
  const handleSignOut = () => {

    navigate('/');
    setDropdownOpen(false);
  };

  return (
    <nav>

      <p className="nav-title">{title}</p>
      <div className="user-info">
      <span onClick={handleUserClick}>{loggedInUsername}</span>
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
