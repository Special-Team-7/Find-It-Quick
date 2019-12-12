import React from 'react';
import { Map, InfoWindow, GoogleApiWrapper, Marker } from 'google-maps-react';
import bathroomIcon from './bathroomIcon.png'
import userIcon from './userIcon.png'


export class Maps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        bathrooms: props.bathrooms,
        // locations: this.getAllMarkers(),
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
        currentLocation: {
          lat: 40.7831,
          lng: -73.9712
        },
        width: props.width,
        height: props.height,
        test: props.bathrooms
    }
  }

  //Runs when component mounts
  componentDidMount() {
    this.getUserLocation();
  }

  getAllMarkers = () => {
    //Array of objects containing lat-long information of all bathrooms
    let results = [];
    this.state.bathrooms.forEach(bathroom => {
      results.push({
        id: bathroom.id,
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
      return <Marker key={index} id={index} icon={bathroomIcon}
        position={{
          lat: bathroom.latitude,
          lng: bathroom.longitude
         }}
      onClick={this.onMarkerClick} 
      name = {bathroom.name}
      address = {bathroom.address}
      />
    })
  }

  displayCurrentLocation = () => {
    return <Marker name="My Location" icon={userIcon}
      position={{
        lat: this.state.currentLocation.lat,
        lng: this.state.currentLocation.long
      }} 
    />
  }
  
  //Gets the lat and long of the user location
  getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        const coord = pos.coords;
        const lat = coord.latitude;
        const long = coord.longitude;
        this.setState({
          currentLocation: {lat,long}
        })
      })
    }
  }

  render() {
    console.log(this.state.test);
    return (
      <div>
        <Map
          google={this.props.google} // Google Maps
          style={{width: this.state.width, height: this.state.height}} // Sizing of Map
          zoom={13} // How Far We Zoom For Google Map
          initialCenter={this.state.currentLocation}
          onClick={this.onMapClicked} // Clickable Map
          centerAroundCurrentLocation
        >
        {/* {this.displayMarkers()} */}
        {this.displayCurrentLocation()}
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
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY
})(Maps);
