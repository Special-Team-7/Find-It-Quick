import React from 'react';
import Maps from '../components/google-maps/Maps';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
        bathrooms: [],
        freeBathrooms: [], 
        paidBathrooms: [], 
        filter: 'All',
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

    //console.log(selectedBathroom)

    //There is no bathrooms
    if(selectedBathroom.length === 0) {
      return null;
    }
    else {
      return (
        <div className="container-fluid text-center">
              <div>
                <Dropdown options={options} onChange={this.onSelect} value={defaultOption} placeholder={this.state.filter} />
                <div className="row">
                  <Maps width={'100%'} height={'100%'} bathrooms={selectedBathroom}/>
                </div> 
              </div>
        </div>
      );
    }
  }
}

export default HomePage;