import React, {Component} from 'react';
import './BathroomCell.css';
import {Link} from 'react-router-dom';


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
                <Link to={{
                  pathname:  `/bathroom/${bathroom.id}`,
                  state: {id: bathroom.id}
                }}> Name: {bathroom.name} </Link>
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
