import React from 'react';
import Rating from 'react-rating'
import {Link} from 'react-router-dom';
import StarBlue from '../public/star-blue.png';
import StarGray from '../public/star-gray.png';
import './BathroomPage.css';
//import Maps from '../components/google-maps/Maps';

class BathroomPage extends React.Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
    this.state = {
      bathroom: {
      },
      rating: 0,
      review: ''
    }
  }

  goBack(){
    this.props.history.goBack();
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
    
    let url = `https://maps.googleapis.com/maps/api/streetview?size=720x720&location=${this.state.bathroom.latitude},${this.state.bathroom.longitude}&fov=80&heading=180&pitch=0&key=`+process.env.REACT_APP_GOOGLE_MAPS_KEY;

    return (
      <div className="jumbotron BathroomPageBox">
      <button className="btn btn-primary" onClick={this.goBack}>Back</button>
      <br/>
      <div className="row">
        <div className="col-12">
          <img className="img-fluid center" src={url} alt = "Bathroom"/>
            <h2 className="font-weight-bold text-left">{this.state.bathroom.name}</h2>
            <h5 className="text-left">{this.state.bathroom.address}</h5>
            <hr/>
            <h4 className="font-weight-bold text-left text-capitalized">Reviews</h4>
            {/*initialRating should be this.state.bathroom.average_rating*/}
            <Rating
              initialRating={4}
              readonly={true}
              emptySymbol={<img src={StarGray}/>}
              fullSymbol={<img src={StarBlue}/>}
              fractions={2}
            />
            <div style={{color: 'black'}}  className="text-left">{this.state.bathroom.review}</div>
            <Link style={{color: 'blue'}} to={`/review/${this.state.bathroom.id}`}>View All Reviews</Link>
            <hr/>
            <div style={{margin: 'auto'}}>MAP PLACEHOLDER</div>
            <button type="button" className="btn btn-primary btn-block navy" data-toggle="modal" data-target="#reviewModal">
              <div className="subtitle">Write Review</div>
            </button>

            <div className="modal" id="reviewModal" tabIndex="-1" role="dialog">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <div className="modal-title subtitle darkgray">Write Review For {this.state.bathroom.name}</div>
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
                        <div>{this.state.rating}</div>
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
      </div>

    );
  }
}

export default BathroomPage;
