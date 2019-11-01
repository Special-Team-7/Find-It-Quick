import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

class MapsPage extends React.Component{
  render() {
    return (
        <div>
            {this.renderRedirect()}
            {this.state.locRendered ? (
                <Map
                    google={this.props.google}
                    zoom={14}
                    styles={this.props.mapStyles}
                    disableDefaultUI={true}
                    onClick={this.saveCoords}
                    onDragend={this.centerMoved}
                    initialCenter={{
                        lat: this.state.loc_x,
                        lng: this.state.loc_y
                    }}
                >
                </Map>
            ) : null}
        </div>
    )
  }
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyCV_7PYGsw3EODTvFicWwnQsvbWQi7MgzA'
})(MapsPage);