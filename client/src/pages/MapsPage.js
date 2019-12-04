import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import Geocode from "react-geocode";

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        bathrooms: [],
        locations: []
    }
  }

  //Runs when component mounts
  componentDidMount() {
    //Getting all of the bathrooms via api
    fetch('/api/bathrooms').then(res => res.json()).then((res) => {
      this.setState({bathrooms: res});
      this.setState({locations: this.getAllMarkers()});
    });
  }

  getAllMarkers = () => {
    //Array of objects containing lat-long information of all bathrooms
    let results = [];

    this.state.bathrooms.forEach(bathroom => {
      results.push({
        latitude:bathroom.latitude,
        longitude: bathroom.longitude
      });
    });

    return results;
  }

  displayMarkers = () => {
    return this.state.locations.map((store, index) => {
      return <Marker key={index} id={index} position={{
       lat: store.latitude,
       lng: store.longitude
     }}
     onClick={() => console.log("You clicked me!")} />
    })
  }

  getUserLocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition)
    }
  }

  render() {
    return (
      <div className="container-fluid text-center">
        <div className="row justify-content-center" style={{position: 'static'}}>
          <Map
            google={this.props.google}
            zoom={14}
            style={this.props.mapStyles ? this.props.mapStyles : mapStyles}
            initialCenter={{
            lat: 40.7831,
            lng: -73.9712
            }}
            >
            {this.displayMarkers()}
          </Map>
            <label className="col-sm-4 col-form-label">{this.props.label}</label>
            <div className="col-xl-8">
              <input
                type="text"
                defaultValue={this.props.value}
                onChange={this.props.onChange}
                className="form-control"
                placeholder={this.props.placeholder} />
            </div>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCw1Cu5QmZqsFLWq-D7m12E3Qqjjj13xWY'
})(MapsPage);
