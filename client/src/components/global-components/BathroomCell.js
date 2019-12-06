import React, {Component} from 'react';
import './BathroomCell.css';
import {Link} from 'react-router-dom';



function BathroomCell(bathroom) {
    {bathroom = bathroom.bathroom};
    //Construct the bathroom URL for street view
    bathroom.url = `https://maps.googleapis.com/maps/api/streetview?size=400x400&location=${bathroom.latitude},${bathroom.longitude}&fov=80&heading=180&pitch=0&key=`+process.env.REACT_APP_GOOGLE_MAPS_KEY;
    return(
        <div className="container">
          <div className="row">
            <div className="col-3">
              <img className="img-fluid" src={bathroom.url}/>
            </div>
            <div className="col-9">
              <div className='col'>
                <p>
                <Link to={{
                  pathname:  `/bathroom/${bathroom.id}`,
                  state: {id: bathroom.id}
                }}> Name: {bathroom.name} </Link>
                </p>
              </div>
              <div className='col'>
                <p>Rating: {bathroom.rating} </p>
              </div>
              <div className='col'>
                <p>Category: {bathroom.category} </p>
              </div>
              <div className='col'>
                <p>Address: {bathroom.address} </p>
              </div>
           </div>
          </div>
          <br/>
          <hr></hr>
        </div>




    );
}

export default BathroomCell;