import React, { useState } from 'react';
import './Search.css';

const SearchPage = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [hasSearched, setHasSearched] = useState(false);

    const handleSearch = () => {
        // Implement your search logic here
        // For demonstration purposes, let's assume the searchResults come from an API call
        setSearchResults(['Result 1', 'Result 2', 'Result 3']);
        setHasSearched(true);
    };

    return (
        <>
            <nav>
                <p>Search Page</p>
            </nav>
            <div className="search-page">


                <div className='search-user'>
                    <h1>Search Page</h1>
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
                                {searchResults.map((result, index) => (
                                    <div key={index}>{result}</div>
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
