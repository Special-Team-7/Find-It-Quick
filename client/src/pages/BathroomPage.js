import React from 'react';
import Rating from 'react-rating'
import {Link} from 'react-router-dom';
import StarBlue from '../public/star-blue.png';
import StarGray from '../public/star-gray.png';
//import Maps from '../components/google-maps/Maps';

class BathroomPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bathroom: {
      }
    }
  }
  componentDidMount() {

    fetch(`/api/bathrooms/${this.props.location.state.id}`).then(res => res.json()).then((res) => {
      this.setState({
        bathroom: res,
      });
    });


  }
  render() {
    let mapStyles = {
      width: '50%',
      height: '50%',
      position: 'relative'
    }

    console.log(this.state.bathroom)
    return (
      <div className="container">
      <div className="row">
        <img className="col-12 img-fluid" src="https://via.placeholder.com/40x30"/>
        <h2 className="col-8 pt-3 pl-3 font-weight-bold text-left">{this.state.bathroom.name}</h2>
        <h5 className="col-8 pl-3 text-left">{this.state.bathroom.address}</h5>
        <hr/>
        <h4 className="col-6 pl-3 font-weight-bold text-left text-capitalized">Reviews</h4>
        <Rating
          initialRating={this.state.bathroom.average_rating}
          readonly={true}
          emptySymbol={<img src={StarGray}/>}
          fullSymbol={<img src={StarBlue}/>}
          fractions={2}
        />
        <div style={{color: 'black'}}  className="col-sm-12 text-left">{this.state.bathroom.review}</div>
        <Link style={{color: 'blue'}} className="pl-3" to={`/review/${this.state.bathroom.id}`}>View all reviews</Link>
        <hr/>
        <div className="col-12" style={{margin: 'auto'}}>MAP PLACEHOLDER</div>

      </div>
      </div>

    );
  }
}

export default BathroomPage;
