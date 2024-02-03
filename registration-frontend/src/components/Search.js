import React, { useState} from 'react';
import './Search.css';
import UserService from '../api/UserService';
import Navbar from './Navbar';
import { useLocation } from 'react-router-dom';

const SearchPage = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [hasSearched, setHasSearched] = useState(false);
    const location = useLocation();
    const [searchType, setSearchType] = useState(0);
    const loggedInUsername = location.state.username

    const handleSearch = () => {
        try {
            console.log(searchTerm);
            const creds = { searchTerm }
            switch(searchType){
                case 1:{
                    UserService.findUser(creds).then((response)=>{
                        console.log(response.data);
                        setSearchResults(response.data)
                        setHasSearched(true);
                    })
                    break;
                }
                case 0:{
                    UserService.findUserbyUsername(creds).then((response)=>{
                        console.log(response.data);
                        setSearchResults(response.data)
                        setHasSearched(true);
                    })
                    break;
                }
                case 2:{
                    UserService.findUserbyLastName(creds).then((response)=>{
                        console.log(response.data);
                        setSearchResults(response.data)
                        setHasSearched(true);
                    })
                    break;
                }
                case 3:{
                    UserService.findUserbyEmail(creds).then((response)=>{
                        console.log(response.data);
                        setSearchResults(response.data)
                        setHasSearched(true);
                    })
                    break;
                }
                case 4:{
                    UserService.findUserbyDept(creds).then((response)=>{
                        console.log(response.data);
                        setSearchResults(response.data)
                        setHasSearched(true);
                    })
                    break;
                }
                case 5:{
                    UserService.findUserbyYear(creds).then((response)=>{
                        console.log(response.data);
                        setSearchResults(response.data)
                        setHasSearched(true);
                    })
                    break;
                }
                case 6:{
                    UserService.findUserbyGender(creds).then((response)=>{
                        console.log(response.data);
                        setSearchResults(response.data)
                        setHasSearched(true);
                    })
                    break;
                }
                case 7:{
                    UserService.findUserbyCollege(creds).then((response)=>{
                        console.log(response.data);
                        setSearchResults(response.data)
                        setHasSearched(true);
                    })
                    break;
                }
                case 8:{
                    UserService.findUserbyPhone(creds).then((response)=>{
                        console.log(response.data);
                        setSearchResults(response.data)
                        setHasSearched(true);
                    })
                    break;
                }
                default:{

                }
            }
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
                        placeholder="Search:"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <select
                        value={searchType}
                        onChange={(e) => setSearchType(parseInt(e.target.value, 10))}
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
                    <button onClick={handleSearch}>Search</button>
                </div>

                {hasSearched && (
                    <div>
                        {searchResults.length > 0 ? (
                            <div className="search-results">
                                {searchResults.map((user, index) => (
                                    <div key={index}>
                                        <p>Username: {user.username}</p>
                    
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
