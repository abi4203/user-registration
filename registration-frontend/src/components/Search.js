import React, { useState, useEffect } from 'react';
import './Search.css';
import UserService from '../api/UserService';
import Navbar from './Navbar';
import { useLocation } from 'react-router-dom';

const SearchPage = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [hasSearched, setHasSearched] = useState(false);
    const location = useLocation();
    const loggedInUsername = location.state.username

    const handleSearch = () => {
        try {
            console.log(searchTerm);
            UserService.findUser(searchTerm).then((response)=>{
                console.log(response.data);
                setSearchResults(response.data)
                setHasSearched(true);
            })
        } catch (error) {
            console.error('Error searching users:', error);
        }
    };


    return (
        <div>
            <Navbar title={'Search Page'}loggedInUsername={loggedInUsername} />
            <div className="search-page">
                <div className='search-user'>
                    <input
                        type="text"
                        placeholder="Search Users using first name:"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button onClick={handleSearch}>Search</button>
                </div>

                {hasSearched && (
                    <div>
                        {searchResults.length > 0 ? (
                            <div className="search-results">
                                {searchResults.map((user, index) => (
                                    <div key={index}>
                                        <p>Username: {user.username}</p>
                                        {/* Add other user details as needed */}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div>No results found</div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchPage;
