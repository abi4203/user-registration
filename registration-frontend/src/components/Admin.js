import React, { useState, useEffect } from 'react';
import './Search.css';
import UserService from '../api/UserService';
// import Navbar from './Navbar';
import { useNavigate, useLocation } from 'react-router-dom';


const AdminPage = () => {

    const [searchResults, setSearchResults] = useState([]);
    const [searchResults1, setSearchResults1] = useState([]);
    const [selectedUser, setSelectedUser] = useState();
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const disp = () => {
        try {
            UserService.findAllUsers().then((response) => {
                console.log(response.data);
                setSearchResults(response.data);
            })
            UserService.findAllSuccessfulUsers().then((response) => {
                setSearchResults1(response.data);
            })
            
        } catch (error) {
            console.error('Error searching users:', error);
        }
    };

    useEffect(() => {
        console.log("check");
        setDropdownOpen(false);
        disp();
    }, [])

    const handleCardClick = (user) => {
        setSelectedUser(user);
    };
    
    const handleSignOut = () => {
        navigate('/');
        setDropdownOpen(false);
    };
    const handleSearch = () => {
        navigate('/admin');
        setDropdownOpen(false);
    };
    const handleUserInfo = () => {
        const username="Admin";
        navigate('/user-info', { state: { username } });
        setDropdownOpen(false);
    };
    const handleUserClick = () => {
        setDropdownOpen(!isDropdownOpen);
    };
    const handleClosePopup = () => {
        setSelectedUser(null);
    };
    const acceptUser = () =>{
        // e.preventDefault();
        const { username, email, password, firstName, lastName, dob, collegeName, department, year, phoneNumber, gender } = selectedUser;

        const user = {
            username,
            email,
            password,
            firstName,
            lastName,
            dob,
            collegeName,
            department,
            year,
            phoneNumber,
            gender
        };
        UserService.createUser(user).then((response) => {
            console.log(response.data);
          })
          var searchTerm = username;
          var creds = { searchTerm };
        UserService.deleteUsername(creds).then((response)=>{
            console.log(response.data);
        })
    };
    const rejectUser = () =>{
        const { username, email, password, firstName, lastName, dob, collegeName, department, year, phoneNumber, gender } = selectedUser;

        const user = {
            username,
            email,
            password,
            firstName,
            lastName,
            dob,
            collegeName,
            department,
            year,
            phoneNumber,
            gender
        };
          var searchTerm = username;
          var creds = { searchTerm };
        UserService.deleteUsername(creds).then((response)=>{
            console.log(response.data);
        })
    };
    

    return (
        <>
    <nav>
    <p className="nav-title">Admin Page</p>
      <div className="user-info">
      <span onClick={handleUserClick}>Admin</span>
        {isDropdownOpen && (
          <div className="dropdown-content">
            <p onClick={handleUserInfo}>User Info</p>
            <p onClick={handleSearch}>Admin</p>
            <p onClick={handleSignOut}>Sign Out</p>
          </div>
        )}
        </div>
    </nav>
    <div className='both-sides'>
        
        <div className="search-results-admin" >
            <p><b>PENDING ENTRIES:</b></p>
            {searchResults.length > 0 ? (
                <>
                    {searchResults.map((user, index) => (
                        <>
                            <div key={index} className="user-card" onClick={() => handleCardClick(user)}>
                                <div className="user-initial-circle">
                                    <p className="user-initial">{user.username.charAt(0).toUpperCase()}</p>
                                </div>
                                <div className="user-info-details">
                                    <p className="user-info-item" style={{ fontWeight: 'bold', color: '#555'}}>{user.username}</p>
                                    <p className="user-info-item" style={{ color: '#888' }}>{user.email}</p>
                                </div>
                            </div>

                        </>
                    ))}
                </>
            ) : (
                <div>No results found</div>
            )}

        </div>
        {selectedUser && (
                <div className="popup-overlay">
                    <div className="popup">
                        <div className="popup-content">
                            <p className="popup-close" onClick={handleClosePopup}>
                                &times;
                            </p>
                            <form>
                                <label>Username:</label>
                                <input type="text" value={selectedUser.username} readOnly />

                                <label>Email:</label>
                                <input type="text" value={selectedUser.email} readOnly />

                                <label>Name:</label>
                                <div className='name'>
                                    <input type="text" value={selectedUser.firstName} readOnly />
                                    <input type="text" value={selectedUser.lastName} readOnly />
                                </div>

                                <label>Gender:</label>
                                <input type="text" value={selectedUser.gender} readOnly />

                                <label>Date of Birth:</label>
                                <input type="text" value={selectedUser.dob} readOnly />

                                <label>College Name:</label>
                                <input type="text" value={selectedUser.collegeName} readOnly />

                                <label>Department:</label>
                                <input type="text" value={selectedUser.department} readOnly />

                                <label>Year:</label>
                                <input type="text" value={selectedUser.year} readOnly />

                                <label>Phone Number:</label>
                                <input type="text" value={selectedUser.phoneNumber} readOnly />
                                
                                <button onClick={acceptUser} className='accept'>Accept</button>
                                <button onClick={rejectUser} className='reject'>Reject</button>

                            </form>
                        </div>
                    </div>
                </div>
            )}
            <div className='successful-entries'>
                <p><b>SUCCESSFUL ENTRIES:</b></p>
                <div>
            {searchResults1.length > 0 ? (
                <>
                    {searchResults1.map((user, index) => (
                        <>
                            <div key={index} className="user-card" onClick={() => handleCardClick(user)}>
                                <div className="user-initial-circle">
                                    <p className="user-initial">{user.username.charAt(0).toUpperCase()}</p>
                                </div>
                                <div className="user-info-details">
                                    <p className="user-info-item" style={{ fontWeight: 'bold', color: '#555'}}>{user.username}</p>
                                    <p className="user-info-item" style={{ color: '#888' }}>{user.email}</p>
                                </div>
                            </div>

                        </>
                    ))}
                </>
            ) : (
                <div>No results found</div>
            )}

        </div>
        {selectedUser && (
                <div className="popup-overlay">
                    <div className="popup">
                        <div className="popup-content">
                            <p className="popup-close" onClick={handleClosePopup}>
                                &times;
                            </p>
                            <form>
                                <label>Username:</label>
                                <input type="text" value={selectedUser.username} readOnly />

                                <label>Email:</label>
                                <input type="text" value={selectedUser.email} readOnly />

                                <label>Name:</label>
                                <div className='name'>
                                    <input type="text" value={selectedUser.firstName} readOnly />
                                    <input type="text" value={selectedUser.lastName} readOnly />
                                </div>

                                <label>Gender:</label>
                                <input type="text" value={selectedUser.gender} readOnly />

                                <label>Date of Birth:</label>
                                <input type="text" value={selectedUser.dob} readOnly />

                                <label>College Name:</label>
                                <input type="text" value={selectedUser.collegeName} readOnly />

                                <label>Department:</label>
                                <input type="text" value={selectedUser.department} readOnly />

                                <label>Year:</label>
                                <input type="text" value={selectedUser.year} readOnly />

                                <label>Phone Number:</label>
                                <input type="text" value={selectedUser.phoneNumber} readOnly />

                            </form>
                        </div>
                    </div>
                </div>
            )}
            </div>
    </div>
        {/* </div> */}

        </>
    
)};

export default AdminPage;
