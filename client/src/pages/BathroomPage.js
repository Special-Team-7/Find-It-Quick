import React from 'react';
import Rating from 'react-rating'
import {Link} from 'react-router-dom';
import StarBlue from '../public/star-blue.png';
import StarGray from '../public/star-gray.png';
import '../index.css';
//import Maps from '../components/google-maps/Maps';

class BathroomPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bathroom: {
      },
      rating: 0,
      review: ''
    }
  }

  ratingChange(rate) {
    this.setState({rating: rate})
    console.log(this.state.rating)
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

    return (
      <div className="container">
      <div className="row">
        <img className="col-12 img-fluid" src="https://via.placeholder.com/40x30"/>
        <h2 className="col-8 pt-3 pl-3 font-weight-bold text-left">{this.state.bathroom.name}</h2>
        <h5 className="col-8 pl-3 text-left">{this.state.bathroom.address}</h5>
        <hr/>
        <h4 className="col-6 pl-3 font-weight-bold text-left text-capitalized">Reviews</h4>
        {/*initialRating should be this.state.bathroom.average_rating*/}
        <Rating
          initialRating={4}
          readonly={true}
          emptySymbol={<img src={StarGray}/>}
          fullSymbol={<img src={StarBlue}/>}
          fractions={2}
        />
        <div style={{color: 'black'}}  className="col-sm-12 text-left">{this.state.bathroom.review}</div>
        <Link style={{color: 'blue'}} className="pl-3" to={`/review/${this.state.bathroom.id}`}>View all reviews</Link>
        <hr/>
        <div className="col-12" style={{margin: 'auto'}}>MAP PLACEHOLDER</div>

        <div className="col-12 pl-2 pr-2">
          <button type="button" className="btn btn-primary btn-block navy" data-toggle="modal" data-target="#reviewModal">
            <div className="subtitle">Write Review</div>
          </button>
        </div>

        <div className="modal" id="reviewModal" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-title subtitle darkgray">Write Review for {this.state.bathroom.name}</div>
              <button type="button block" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p className="text-left">Rating</p>
              <div className="row">
                <div className="col-6">
                  <Rating
                    initialRating={1}
                    readonly={false}
                    emptySymbol={<img src={StarGray}/>}
                    fullSymbol={<img src={StarBlue}/>}
                    fractions={2}
                    onChange={this.ratingChange.bind(this)}
                  />
                  <div className="col-6">{this.state.rating}</div>
                </div>
             </div>
              <div className="navy text-left">Upload Image</div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">Save changes</button>
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
        </div>

      </div>
      </div>

    );
  }
}

export default BathroomPage;
