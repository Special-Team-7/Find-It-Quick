import React from 'react';
import Rating from 'react-rating'
import {Link} from 'react-router-dom';
import StarBlue from '../public/star-blue.png';
import StarGray from '../public/star-gray.png';
import Maps from './MapsPage';
const bathrooms = [
    {id:1, business_name:'Starbucks',location:'Lat:81 Long:32', rating:'4.4', tag:'coffee place', review:"Really good", url:"https://www.gannett-cdn.com/presto/2019/01/28/PPHX/1c95ae4d-fa6e-428a-99e5-75fd8ae6f957-bathroom.jpg?width=540&height=&fit=bounds&auto=webp"},
    {id:2, business_name:'MC Donalds',location:'Lat:86 Long:42', rating:'1', tag:'Fast-Food', review: "Okay", url:"https://ggwash.org/images/made/images/posts/_resized/bathroom_750_422_90.jpg"},
    {id:3, business_name:'Park 101',location:'Lat:41 Long:62', rating:'4', tag:'public park', review:"Not bad", url:"https://www.facilitiesnet.com/resources/editorial/2018/071618a41785-Restroom.jpg"},
    {id:4, business_name:'Hilton Hotel', location:'Lat:41 Long:67', rating:'4.7', tag:'Hotel', review:'Very fancy!', url:'https://tinyurl.com/yyod2cr6'},

  ];

class BathroomPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bathrooms: {


      }
    }
  }
  componentDidMount() {
    fetch('/api/bathrooms/2').then(res => res.json()).then((res) => {
      this.setState({bathrooms: res});
    });


  }
  render() {
    console.log(this.props.location)
    console.log(this.props.location.pathname)
    console.log(this.props.location.state)
    console.log(this.state.bathrooms.id)
    return (
      <div className="container">
      <div className="row">
        <img className="col-12 img-fluid" src="https://via.placeholder.com/40x30"/>
        <h2 className="col-8 pt-3 pl-3 font-weight-bold text-left">{bathrooms[0].business_name}</h2>
        <h5 className="col-8 pl-3 text-left">{bathrooms[0].location}</h5>
        <hr/>
        <h4 className="col-6 pl-3 font-weight-bold text-left text-capitalized">Reviews</h4>
        <Rating
          initialRating={bathrooms[0].rating}
          readonly={false}
          emptySymbol={<img src={StarGray}/>}
          fullSymbol={<img src={StarBlue}/>}
          fractions={2}
        />
        <div style={{color: 'black'}}  className="col-sm-12 text-left">{bathrooms[0].review}</div>
        <Link style={{color: 'blue'}} className="pl-3" to={`/review${bathrooms[0].id}`}>View all reviews</Link>
        <hr/>
        <div className="container-fluid text-center"><div className="row justify-content-center"><Maps style={{width: '50%', height: '10%'}}/></div></div>
          <hr/>
      </div>
      </div>

    );
  }
}

export default BathroomPage;
