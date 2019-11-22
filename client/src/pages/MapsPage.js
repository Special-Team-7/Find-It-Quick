import React from 'react';
import { Map, InfoWindow, GoogleApiWrapper, Marker } from 'google-maps-react';
import Geocode from "react-geocode";

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapsPage extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
      stores: [{latitude: 40.8200471, longitude: -73.9514611},
              {latitude: 40.7670624, longitude: -73.9786206},
              {latitude: 40.7568039, longitude: -73.9852351},
              {latitude: 40.7424096, longitude: -74.0058617},
              {latitude: 40.7424096, longitude: -74.0058617}],
              showingInfoWindow: false,
              activeMarker: {},
              selectedPlace: {},
    }
  }

  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return <Marker key={index} id={index} position={{
       lat: store.latitude,
       lng: store.longitude
     }}
     onClick={this.onMarkerClick} />
    })
  }

  getUserLocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition)
    }
  }
  
  onMarkerClick = (props, marker, e) =>
    this.state({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.state({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  render() {
    return (
      <div className="container-fluid text-center">
        <div className="row justify-content-center">
          <Map
            google={this.props.google} // Google Maps
            style={mapStyles} // Sizing of Map
            zoom={14} // How Far We Zoom For Google Map
            initialCenter={{ // Starting Location (Manhattan)
            lat: 40.7831,
            lng: -73.9712
            }}
            onClick={this.onMapClicked} // Clickable Map
            >
            <Marker 
            onClick={this.onMarkerClicked}
            name={'Current Location'}/>
            <InfoWindow
              onOpen={this.windowHasOpened}
              onClose={this.windowHasClosed}
              visible={this.state.showingInfoWindow}>
                <div>
                  <h1>test</h1>
                </div>
            </InfoWindow>
             {/* {this.displayMarkers()}} */}
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
