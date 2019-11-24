import React from 'react';
import { Map, InfoWindow, GoogleApiWrapper, Marker } from 'google-maps-react';
import Geocode from "react-geocode";

var mapStyles = {
  width: '100%',
  height: '100%'
};

export class Maps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        bathrooms: [],
        locations: [],
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {}
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
        latitude: bathroom.latitude,
        longitude: bathroom.longitude,
        name: bathroom.name,
        address: bathroom.address
      });
    });
    return results;
  }

  onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  displayMarkers = () => {
    return this.state.locations.map((bathroom, index) => {
      return <Marker key={index} id={index} position={{
        lat: bathroom.latitude,
        lng: bathroom.longitude
     }}
      onClick={this.onMarkerClick} 
      name = {bathroom.name}
      address = {bathroom.address}
      />
    })
  }
  

  getUserLocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition)
    }
  }

  render() {
    return (
      <div>
        <Map
          google={this.props.google} // Google Maps
          style={mapStyles} // Sizing of Map
          zoom={13} // How Far We Zoom For Google Map
          initialCenter={{ // Starting Location (Manhattan)
          lat: 40.7831,
          lng: -73.9712
          }}
          onClick={this.onMapClicked} // Clickable Map
        >
        {this.displayMarkers()}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <p><b>Name: </b>{this.state.selectedPlace.name}</p>
              <hr/>
              <p><b>Location: </b>{this.state.selectedPlace.address}</p>
            </div>
        </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCw1Cu5QmZqsFLWq-D7m12E3Qqjjj13xWY'
})(Maps);
