import React from 'react';
import Rating from 'react-rating'
import {Link} from 'react-router-dom';
import StarBlue from '../public/star-blue.png';
import StarGray from '../public/star-gray.png';
import Maps from './MapsPage';
import '../index.css';

const Review = [
    {UID: '1', BID: '1', Rating: 1, Review: 'review one'},
    {UID: '2', BID: '1', Rating: 4, Review: 'review two'},
    {UID: '3', BID: '1', Rating: 4, Review: 'review three'}
]

class ReviewPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: Review
    }
  }

  componentDidMount() {
    //TODO: API call for reviews based on bathroom ID
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <p>Review</p>
          {this.state.reviews.map((review, index) => {
            return (
              <p className="abrilc">{review.UID}</p>
            )
          })}
        </div>
      </div>

    );
  }
}

export default ReviewPage;

/*
TODO: fix route for review
*/
