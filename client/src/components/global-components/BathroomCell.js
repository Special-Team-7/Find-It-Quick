import React, {Component} from 'react';
import './BathroomCell.css';
import logo from '../../public/logo192.png';


function BathroomCell(bathroom) {
    {bathroom = bathroom.bathroom};
    return(
        <div className="container">
          <div className="row">
            <div className="col-3">
              <img className="img-fluid" src={logo}/>
            </div>
            <div className="col-9">
              <div className='col'>
                <p>{bathroom.business_name} </p>
              </div>
              <div className='col'>
                <p>{bathroom.rating} </p>
              </div>
              <div className='col'>
                <p>{bathroom.tag} </p>
              </div>
           </div>
          </div>
        </div>




    );
}

export default BathroomCell;
