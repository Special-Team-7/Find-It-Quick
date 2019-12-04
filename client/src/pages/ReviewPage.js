import React from 'react';
import Rating from 'react-rating'
import {Link} from 'react-router-dom';
import StarBlue from '../public/star-blue.png';
import StarGray from '../public/star-gray.png';
import Maps from './MapsPage';
import '../index.css';



const Review = [
    {Name: 'Tommy S.', UID: '1', BID: '1', Rating: 1, Review: 'Lorem ipsum dolor amet woke small batch vaporware, synth palo santo succulents heirloom iceland pug cloud bread seitan crucifix distillery snackwave hoodie. Food truck banjo squid sustainable, fanny pack twee butcher drinking'},
    {Name: 'Michael B.', UID: '2', BID: '1', Rating: 4, Review: 'wolf moon celiac mixtape messenger bag hoodie palo santo hella. Roof party fixie retro, mixtape thundercats bushwick tilde authentic'},
    {Name: 'Anna L.', UID: '3', BID: '1', Rating: 4, Review: 'fingerstache live-edge asymmetrical vice fashionx axe trust fund truffaut 3 wolf'}
]

function RatingCell(review) {

  console.log(review.review.Rating)
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <div className="abrilfont subtitle text-left">{review.review.Name}</div>
        </div>
        <div className="col-6">
          <Rating
            initialRating={review.review.Rating}
            readonly={true}
            emptySymbol={<img src={StarGray}/>}
            fullSymbol={<img src={StarBlue}/>}
            fractions={2}
          />
        </div>
        <div className="text-left">{review.review.Review}</div>
      </div>
    <hr/>
  </div>
  )

}

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
          <div className="col-12">
            <br/>
            <div className="title text-left" style={{color: '#3E3E3E', fontWeight: 'bold'}}>Reviews</div>
            <br/>
            {this.state.reviews.map((review, index) => {
              return (
                <RatingCell review={review}/>
              )
            })}
          </div>
        </div>
      </div>

    );
  }
}

export default ReviewPage;

/*
TODO: fix route for review
*/
