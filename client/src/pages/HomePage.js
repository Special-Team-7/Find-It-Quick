import React from 'react';
import Post from '../components/Post';
import Loading from '../components/Loading';


class HomePage extends React.Component {
  render() {
    return (
      <div className="container-fluid text-center">
        <div className="row justify-content-center">
        {
          <h1>
            Home Page. Probably Will Be Google Maps. Just For Testing Purposes.
          </h1>
        }
        </div>
      </div>
    );
  }
}

export default HomePage;