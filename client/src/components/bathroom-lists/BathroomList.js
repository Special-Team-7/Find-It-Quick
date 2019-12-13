import React, {Component} from 'react';
import BathroomCell from '../global-components/BathroomCell';
import './BathroomList.css';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

class BathroomList extends Component {
    constructor() {
        super();
        this.state = {
            bathrooms: [],
            freeBathrooms: [],
            paidBathrooms: [], 
            filter: 'All'
        }
    }

    //Runs when component mounts
    componentDidMount() {

      // Get all bathrooms
      fetch('/api/bathrooms').then(res => res.json()).then((res) => {
        this.setState({bathrooms: res});
      });

      // Get all free bathrooms
      fetch('/api/bathrooms/free').then(res => res.json()).then((res) => {
        this.setState({freeBathrooms: res});
      });

      // Get all paid bathrooms
      fetch('/api/bathrooms/paid').then(res => res.json()).then((res) => {
        this.setState({paidBathrooms: res});
      });
      
    }

    onSelect = (e) => {
      this.setState({filter:e.value});
    }
    

    render() {
      const options = ['All', 'Free', 'Paid'];
      const defaultOption = this.state.filter;
      let selectedBathroom = [];
      
      if(this.state.filter === 'All') {
        selectedBathroom = this.state.bathrooms;
      }
      else if(this.state.filter === 'Free') {
        selectedBathroom = this.state.freeBathrooms;
      }
      else {
        selectedBathroom = this.state.paidBathrooms;
      }

      return (
        <div className="BathroomListBox">
          <br/>
          <h2><u>List of Bathrooms</u></h2>
          <Dropdown options={options} onChange={this.onSelect} value={defaultOption} placeholder={this.state.filter} />
          <br/>
            {selectedBathroom.map(bathroom => { 
              return <BathroomCell key={bathroom.id} bathroom={bathroom}></BathroomCell>
            })}
        </div>
      );
    }
    
}

export default BathroomList;

