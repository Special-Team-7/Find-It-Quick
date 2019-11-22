import React from 'react';

export default class addBathroomPage extends React.Component {

    constructor() {
        super();
        this.state = {
            name:"",
            address:"",
            zipcode:"",
            category:"free" //initialized to the first item of the list
        }
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

    submitBathroom = () => {
        // Make post request to save on the DB
        fetch('/api/bathroom/create',{
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
                <form>
                    {"Business Name: "}<input type="text" placeholder="eg. McDonald's" onChange={this.nameChanged}></input>
                    <br/>
                    <br/>
                    {"Business Address: "}<input type="text" placeholder="eg. 1188 6th Ave New York" onChange={this.addressChanged}></input>
                    <br/>
                    <br/>
                    {"Zipcode: "}<input type="text" placeholder="eg. 11434" onChange={this.zipcodeChanged}></input>
                    <br/>
                    <br/>
                    {"Category: "}
                    <select onChange={this.categoryChanged}>
                        <option value="free">Free</option>
                        <option value="paid">Paid</option>
                    </select> 
                </form>
                <br/>
                <button onClick={this.submitBathroom}>Submit</button>
            </div>
        );
    }
}