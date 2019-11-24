import React from 'react';
import Maps from '../components/google-maps/Maps';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="container-fluid text-center">
            <div className="row">
              <Maps/>
            </div> 
        </div>
    );
  }
}

export default HomePage;