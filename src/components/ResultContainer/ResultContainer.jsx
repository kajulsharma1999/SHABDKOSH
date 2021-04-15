import React from "react";
import NameCard from "../NameCard/NameCard";
import './ResultContainer.css';

const ResultContainer = ({ suggestednames }) => {

    const suggestednamejsx = suggestednames.map((suggestedname) => {

        return <NameCard key={suggestedname} suggestedname={suggestedname} />
    });
    return (
        <div className="result-container">{suggestednamejsx}</div>
    );
}
export default ResultContainer;