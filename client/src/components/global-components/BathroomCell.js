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
                <p>Business Name:{bathroom.business_name} </p>
              </div>
              <div className='col'>
                <p>Rating: {bathroom.rating} </p>
              </div>
              <div className='col'>
                <p>Tag: {bathroom.tag} </p>
              </div>
              <div className='col'>
                <p>Review: {bathroom.review} </p>
              </div>
           </div>
          </div>
        </div>




    );
}

export default BathroomCell;
