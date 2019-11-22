import React, {Component} from 'react';
import './BathroomCell.css';
import logo from '../../public/logo192.png';


function BathroomCell(bathroom) {
    {bathroom = bathroom.bathroom};
    return(
        <div className="container">
          <div className="row">
            <div className="col-3">
              <img className="img-fluid" src={bathroom.url}/>
            </div>
            <div className="col-9">
              <div className='col'>
                <p>Business Name:{bathroom.name} </p>
              </div>
              <div className='col'>
                <p>Rating: {bathroom.average_rating} </p>
              </div>
              <div className='col'>
                <p>Category: {bathroom.category} </p>
              </div>
              <div className='col'>
                <p>Address: {bathroom.address} </p>
              </div>
           </div>
          </div>
        </div>




    );
}

export default BathroomCell;
