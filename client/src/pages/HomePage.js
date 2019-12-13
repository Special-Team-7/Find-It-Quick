import React from 'react';
import Maps from '../components/google-maps/Maps';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
        bathrooms: [],
        freeBathrooms: [], 
        paidBathrooms: [], 
        filter: 'All', //Initially show all bathrooms
        render: false
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
      this.setState({paidBathrooms: res, render:true});
    });
    
  }

  getAllMarkers = (selectedBathroom) => {
    //Array of objects containing lat-long information of all bathrooms
    let results = [];
    selectedBathroom.forEach(bathroom => {
      results.push({
        id: bathroom.id,
        latitude: bathroom.latitude,
        longitude: bathroom.longitude,
        name: bathroom.name,
        address: bathroom.address
      });
    });
    return results;
  }

  //Update state to show the category of bathrooms we have selected
  onSelect = (e) => {
    this.setState({filter:e.value});
  }

  render() {
    // Category options
    const options = ['All', 'Free', 'Paid'];
    const defaultOption = this.state.filter;

    //Will always reference the bathroom category we have selected
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

    //There is no bathrooms so don't display map(To do: Possibly add loading circle)
    if(selectedBathroom.length === 0) {
      return null;
    }
    else {
      //Get the markers of the bathroom we have selected
      let markers = this.getAllMarkers(selectedBathroom);
      return (
        <div className="container-fluid text-center">
          <div>
            <Dropdown options={options} onChange={this.onSelect} value={defaultOption} placeholder={this.state.filter} />
            <div className="row">
              <Maps width={'100%'} height={'100%'} bathrooms={selectedBathroom} markers={markers}/>
            </div> 
          </div>
        </div>
      );
    }
  }
}

export default HomePage;