import React from 'react';
import './NameCard.css';
const namecheapurl = "https://www.namecheap.com/domains/registration/results/?domain=";
const NameCard = ({ suggestedname }) => {
    return (
        <a
            target="_blank"
            rel="noreferrer"
            className="card-link" href={`${namecheapurl}${suggestedname}`}>
            <div className="result-name-card">
                <p className="result-name" > {suggestedname}</p>
            </div>
        </a>
    );

};
export default NameCard;