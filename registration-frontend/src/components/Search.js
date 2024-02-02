import React, { useState, useEffect } from 'react';
import './Search.css';
import UserService from '../api/UserService';
import Navbar from './Navbar';

const SearchPage = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [hasSearched, setHasSearched] = useState(false);
    const [loggedInUsername, setLoggedInUsername] = useState('');


    useEffect(() => {
        // Fetch the logged-in user's information when the component mounts
        async function fetchLoggedInUser() {
            try {
                const response = await UserService.getLoggedInUser();
                const user = response.data; // Assuming the response structure is { data: user }
                setLoggedInUsername(user.username);
            } catch (error) {
                console.error('Error fetching logged-in user:', error);
            }
        }

        fetchLoggedInUser();
    }, []); // Empty dependency array to run the effect only once

    const handleSearch = async () => {
        try {
            // Assuming there's a function in UserService to fetch users by username
            const response = await UserService.searchUsers(searchTerm);

            // For demonstration purposes, let's assume the response structure is { data: [user1, user2, ...] }
            const users = response.data;

            setSearchResults(users);
            setHasSearched(true);
        } catch (error) {
            console.error('Error searching users:', error);
        }
    };


    return (
        <>
            <Navbar title={'Search Page'}loggedInUsername={loggedInUsername} />
            <div className="search-page">
                <div className='search-user'>
                    <input
                        type="text"
                        placeholder="Search Users.."
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
        </>
    );
};

export default SearchPage;
