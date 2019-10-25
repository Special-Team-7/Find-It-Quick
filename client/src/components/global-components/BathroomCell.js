import React, {Component} from 'react';
import './BathroomCell.css';


function BathroomCell(bathroom) {
    {bathroom = bathroom.bathroom};
    return(
        <div>
            <p> Name: {bathroom.business_name}  Rating:{bathroom.rating} Tag:{bathroom.tag} </p>
        </div>
    );
}

export default BathroomCell;