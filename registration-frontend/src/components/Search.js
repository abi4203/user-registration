import React, { useState } from 'react';
import './Search.css';
import UserService from '../api/UserService';
import Navbar from './Navbar';
import { useLocation } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';

const SearchPage = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [hasSearched, setHasSearched] = useState(false);
    const location = useLocation();
    const [selectedUser, setSelectedUser] = useState(null);
    const [searchType, setSearchType] = useState(0);
    const loggedInUsername = location.state.username

    const handleSearch = () => {
        try {
            console.log(searchTerm);
            const creds = { searchTerm }
            switch (searchType) {
                case 1: {
                    UserService.findUser(creds).then((response) => {
                        console.log(response.data);
                        setSearchResults(response.data)
                        setHasSearched(true);
                    })
                    break;
                }
                case 0: {
                    UserService.findUserbyUsername(creds).then((response) => {
                        console.log(response.data);
                        setSearchResults(response.data)
                        setHasSearched(true);
                    })
                    break;
                }
                case 2: {
                    UserService.findUserbyLastName(creds).then((response) => {
                        console.log(response.data);
                        setSearchResults(response.data)
                        setHasSearched(true);
                    })
                    break;
                }
                case 3: {
                    UserService.findUserbyEmail(creds).then((response) => {
                        console.log(response.data);
                        setSearchResults(response.data)
                        setHasSearched(true);
                    })
                    break;
                }
                case 4: {
                    UserService.findUserbyDept(creds).then((response) => {
                        console.log(response.data);
                        setSearchResults(response.data)
                        setHasSearched(true);
                    })
                    break;
                }
                case 5: {
                    UserService.findUserbyYear(creds).then((response) => {
                        console.log(response.data);
                        setSearchResults(response.data)
                        setHasSearched(true);
                    })
                    break;
                }
                case 6: {
                    UserService.findUserbyGender(creds).then((response) => {
                        console.log(response.data);
                        setSearchResults(response.data)
                        setHasSearched(true);
                    })
                    break;
                }
                case 7: {
                    UserService.findUserbyCollege(creds).then((response) => {
                        console.log(response.data);
                        setSearchResults(response.data)
                        setHasSearched(true);
                    })
                    break;
                }
                case 8: {
                    UserService.findUserbyPhone(creds).then((response) => {
                        console.log(response.data);
                        setSearchResults(response.data)
                        setHasSearched(true);
                    })
                    break;
                }
                default: {

                }
            }
        } catch (error) {
            console.error('Error searching users:', error);
        }
    };
    const handleKeyPress = (e) => {
        // Check if Enter key is pressed (key code 13)
        if (e.key === 'Enter') {
            handleSearch();
        }
    };
    const handleCardClick = (user) => {
        setSelectedUser(user);
    };

    const handleClosePopup = () => {
        setSelectedUser(null);
    };

    return (
        <div>
            <Navbar title={'Search Page'} loggedInUsername={loggedInUsername} />
            <div className="search-page">
                <div className='search-user'>
                    
                        <input
                            type="text"
                            placeholder="Type to Search...."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onKeyPress={handleKeyPress}
                            className="search-input"
                        />

                    
                    <div onClick={handleSearch} > <BsSearch className="search-icon" /></div>

                    <select
                        value={searchType}
                        onChange={(e) => setSearchType(parseInt(e.target.value, 10))}
                        className='dropped'
                    >
                        <option value={0}>Username</option>
                        <option value={1}>First Name</option>
                        <option value={2}>Last Name</option>
                        <option value={3}>Email</option>
                        <option value={4}>Department</option>
                        <option value={5}>Year</option>
                        <option value={6}>Gender</option>
                        <option value={7}>College Name</option>
                        <option value={8}>Phone</option>
                    </select>
                    
                </div>

                {hasSearched && (
                    <div className="search-results">
                        {searchResults.length > 0 ? (
                            <>
                                {searchResults.map((user, index) => (
                                    <>
                                        <div key={index} className="user-card" onClick={() => handleCardClick(user)}>
                                            <div className="user-initial-circle">
                                                <p className="user-initial">{user.username.charAt(0).toUpperCase()} style={{ color: '#555'}}</p>
                                            </div>
                                            <div className="user-info-details">
                                                <p className="user-info-item" style={{ fontWeight: 'bold', color: '#555' }}>{user.username}</p>
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
                )}

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
    );
};

export default SearchPage;
