import React from 'react';
import Rating from 'react-rating'
import StarBlue from '../public/star-blue.png';
import StarGray from '../public/star-gray.png';
import './ReviewPage.css';


//Old reviews format
let Review = [
    // {Name: 'Tommy S.', UID: '1', BID: '1', Rating: 1, Review: 'Lorem ipsum dolor amet woke small batch vaporware, synth palo santo succulents heirloom iceland pug cloud bread seitan crucifix distillery snackwave hoodie. Food truck banjo squid sustainable, fanny pack twee butcher drinking'},
    // {Name: 'Michael B.', UID: '2', BID: '1', Rating: 4, Review: 'wolf moon celiac mixtape messenger bag hoodie palo santo hella. Roof party fixie retro, mixtape thundercats bushwick tilde authentic'},
    // {Name: 'Anna L.', UID: '3', BID: '1', Rating: 4, Review: 'fingerstache live-edge asymmetrical vice fashionx axe trust fund truffaut 3 wolf'}
]
 
function RatingCell(review) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <div className="abrilfont blackfont subtitle text-left">{review.review.Name}</div>
        </div>
        <div className="col-6">
          <Rating
            initialRating={review.review.Rating}
            readonly={true}
            emptySymbol={<img src={StarGray} alt = "StarGray"/>}
            fullSymbol={<img src={StarBlue} alt = "StarBlue"/>}
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
    this.goBack = this.goBack.bind(this);
    this.state = {
      reviews: Review
    }
  }

  goBack(){
    this.props.history.goBack();
  }

  componentDidMount() {
    Review = [];
    // Get reviews for this bathroom
    fetch(`/api/reviews/bathrooms/${this.props.match.params.reviewId}`).then(res => res.json()).then((res) => {
      let reviews = res; //List of all reviews, now traverse to get all users of each review
      
      reviews.forEach(review => {
        //Get the user information for each review through a fetch
        fetch(`/api/user/${review.UID}`).then(res=>res.json()).then(res => {
          let user = res;

          //Build the Review object
          let obj = {
            Name : user.name,
            UID: user.id,
            BID: review.BID,
            Rating: review.rating,
            Review: review.review
          }

           //Add this object to the Review state array
          let newReviews = this.state.reviews;
          newReviews.push(obj);
          this.setState({reviews:newReviews})

        })

      });
    })

  }

  render() {
    if(this.state.reviews.length === 0) {return null;}
    else {
      return (
        <div className="jumbotron ReviewPageBox">
          <div className="row">
            <div className="col-12">
              <button className="btn btn-primary" onClick={this.goBack}>Back</button>
              <br/>
              <div className="title text-left">
                <h1><u>Reviews</u></h1>
              </div>
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
}

export default ReviewPage;
