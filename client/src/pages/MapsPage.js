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
  //   this.state = {
	// 		address: '',
	// 		city: '',
	// 		area: '',
	// 		state: '',
	// 		mapPosition: {
	// 			lat: this.props.center.lat,
	// 			lng: this.props.center.lng
	// 		},
	// 		markerPosition: {
	// 		  lat: this.props.center.lat,
	// 			lng: this.props.center.lng
	// 		}
	// 	}
	// }

  this.state = {
      stores: [{latitude: 40.8200471, longitude: -73.9514611},
              {latitude: 40.7670624, longitude: -73.9786206},
              {latitude: 40.7568039, longitude: -73.9852351},
              {latitude: 40.7424096, longitude: -74.0058617},
              {latitude: 40.7424096, longitude: -74.0058617}]
    }
  }

  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
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
        <div className="row justify-content-center">
          <Map
            google={this.props.google}
            zoom={14}
            style={mapStyles}
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
