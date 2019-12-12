import React from 'react';
import Rating from 'react-rating'
import {Link} from 'react-router-dom';
import StarBlue from '../public/star-blue.png';
import StarGray from '../public/star-gray.png';
import './BathroomPage.css';
//import Maps from '../components/google-maps/Maps';
import * as firebase from 'firebase/app';
import 'firebase/auth';

class BathroomPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bathroom: {
      },
      rating: 0,
      review: '',
      UID: '',
      review: ''
    }
  }

  ratingChange(rate) {
    this.setState({rating: rate})
    console.log(this.state.rating)
  }

  reviewText = (e) => {
    this.setState({review: e.target.value })
    console.log(this.state.review)
  }

  submitReview = (e) => {
    console.log("SUBMIT REVIEW")
    //e.stopImmediatePropagation()
    let review = {
      "UID": this.state.UID,
      "BID": this.props.location.state.id,
      "rating": this.state.rating,
      "review": this.state.review
    }
    console.log(review.UID)
    console.log(review.BID)
    console.log(review.rating)
    console.log(review.review)
    console.log("SUBMIT REVIEW")
    // Make post request to save on the DB
    fetch('/api/reviews/create',{
        method:'POST',
        body: JSON.stringify(review),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
        if(res.ok) {
          console.log('Created review successfully');
        }
        else {
          throw new Error('Error creating bathroom');
        }
      })

  }

  componentDidMount() {
    fetch(`/api/bathrooms/${this.props.location.state.id}`).then(res => res.json()).then((res) => {
      this.setState({
        bathroom: res,
      });
    });

    firebase.auth().onAuthStateChanged(user => {
        if (user) {
          this.setState({
            UID: user.uid,
          });
            console.log(`User logged with ${user.email}`);
          // ...
        } else {
          // User is not logged in, make them loggin to add bathroom
            this.props.history.push("/Login");
        }
    })
  }
  render() {
    let mapStyles = {
      width: '50%',
      height: '50%',
      position: 'relative'
    }

    return (
      <div className="jumbotron BathroomPageBox">
      <div className="row">
        <img className="col-6 img-fluid center" src="https://via.placeholder.com/40x30"/>
        <h2 className="col-8 pt-3 pl-3 font-weight-bold text-left">{this.state.bathroom.name}</h2>
        <h5 className="col-8 pl-3 text-left">{this.state.bathroom.address}</h5>
        <hr/>
        <h4 className="col-6 pl-3 font-weight-bold text-left text-capitalized">Reviews</h4>
        {/*TODO: fetch reviews and preview 2 reviews*/}
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
                  <form>
                      <input type="text" onChange={this.reviewText}></input>
                  </form>
                  <button type="button" onClick={this.submitReview} data-dismiss="modal" aria-label="Close">Submit!</button>
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
