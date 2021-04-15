import React from 'react';
import './SearchBox.css';
const SearchBox = ({ oninputchange }) => {
    return (
        <div className="search-container">
            <input
                onChange={(event) => oninputchange(event.target.value)}
                placeholder="Type keywords"
                className="search-input" />
        </div>
    );
};
export default SearchBox;