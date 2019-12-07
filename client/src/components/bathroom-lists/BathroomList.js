import React, {Component} from 'react';
import BathroomCell from '../global-components/BathroomCell';
import './BathroomList.css';

class BathroomList extends Component {
    constructor() {
        super();
        this.state = {
            bathrooms: []
        }
    }

    //Runs when component mounts
    componentDidMount() {
      fetch('/api/bathrooms').then(res => res.json()).then((res) => {
        this.setState({bathrooms: res});
      });
    }

    render() {
      return (
        <div className="BathroomListBox">
          <h2><u>List of Bathrooms</u></h2>
          <br/>
            {this.state.bathrooms.map(bathroom => { 
              return <BathroomCell key={bathroom.id} bathroom={bathroom}></BathroomCell>
            })}
        </div>
      );
    }
    
}

export default BathroomList;

