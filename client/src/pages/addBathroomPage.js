import React from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';

export default class addBathroomPage extends React.Component {

    constructor() {
        super();
        this.state = {
            name:"",
            address:"",
            latitude:0,
            longitude: 0,
            zipcode:"",
            category:"free", //initialized to the first item of the list
            rating: 0
        }
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                console.log(`User logged with ${user.email}`);
              // ...
            } else {
              // User is not logged in, make them loggin to add bathroom 
                this.props.history.push("/Login");
            }
        })
    }


    nameChanged = (e) => {
        this.setState({name: e.target.value});
    }

    addressChanged = (e) => {
        this.setState({address: e.target.value});
    }

    zipcodeChanged = (e) => {
        this.setState({zipcode: e.target.value});
    }

    categoryChanged = (e) => {
        this.setState({category:e.target.value});
    }

    latChanged = (e) => {
        this.setState({latitude: e.target.value});
    }

    longChanged = (e) => {
        this.setState({longitude: e.target.value});
    }

    ratingChanged = (e) => {    
        this.setState({rating: e.target.value})
    }


    submitBathroom = () => {
        // Make post request to save on the DB
        fetch('/api/bathrooms/create',{
            method:'POST',
            body: JSON.stringify(this.state),
            headers: {
              'Content-Type': 'application/json'
            }
          }).then(res => {
            if(res.ok) {
              console.log('Created bathroom successfully');
            }
            else {
              throw new Error('Error creating bathroom');
            }
          }) 
    }

    render() {
        return (
            <div>
                <h2>Enter a New Bathroom</h2> 
                <br/>
                <form>
                    <h5>Business Name: <input type="text" placeholder="eg. McDonald's" onChange={this.nameChanged}></input> </h5>
                    <br/>
                    <br/>
                    <h5>Business Address: <input type="text" placeholder="eg. 1188 6th Ave New York" onChange={this.addressChanged}></input></h5>
                    <br/>
                    <br/>
                    <h5>Zip Code: <input type="text" placeholder="eg. 11434" onChange={this.zipcodeChanged}></input></h5>
                    <br/>
                    <br/>
                    <h5>Latitude: <input type="text" placeholder="eg. 40.857561" onChange={this.latChanged}></input></h5>
                    <br/>
                    <br/>
                    <h5>Longitude:<input type="text" placeholder="eg. -73.971667" onChange={this.longChanged}></input></h5>
                    <br/>
                    <br/>
                    <h5>Rating: <input type="text" placeholder="eg. 1...5" onChange={this.ratingChanged}></input></h5>
                    <br/>
                    <br/>
                    <h5> Category: 
                    <select onChange={this.categoryChanged}>
                        <option value="free">Free</option>
                        <option value="paid">Paid</option>
                    </select> 
                    </h5>
                </form>
                <br/>
                <button onClick={this.submitBathroom}>Submit</button>
            </div>
        );
    }
}


