import React from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import './LoginPage.css';

export default class LoginPage extends React.Component {

  state = {
    email:"",
    password:"",
    name:""
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
          this.setState({name: user.displayName});
        // ...
      } 
    })
  }

  emailChanged = (e) => { 
    this.setState({
      email: e.target.value
    })
  }

  passChanged = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  loginUser = (e) => {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(data => {
      let usr = data.user;
      this.setState({name:usr.displayName});
      this.forceUpdate();
      //redirect to home page
      this.props.history.push("/");
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  }

  logoutUser = (e) => {
    firebase.auth().signOut().then(() => {
      //Logged out sucessful
      console.log('Logged user out successfully');
      this.setState({name: ""});
    }).catch((err) => {
      //Handle error
      console.log(`Error: ${err}`);
    })
  }

  render() {
    let user = firebase.auth().currentUser;
    return (
      <div className = "loginbox">
        

        {
          //Test if user is logged 
          user ? 
          <div>
            <h4><u>Logout Page</u></h4>
            <button type="button" className="btn btn-primary" onClick={this.logoutUser}> Logout </button> 
          </div>
          : 
          <div> 
            <h4><u>Login Page</u></h4>
            <form>
              <p>Email</p>
              <input type="text" placeholder="Enter Email" onChange={this.emailChanged}></input>
              <br/>
              <br/>
              <p>Password</p>
              <input type="password" placeholder="Enter Password" onChange={this.passChanged}></input>
            </form>
            <button type="button" className="btn btn-primary" onClick={this.loginUser}> Login </button> 
          </div>
          
        }
        <br/>
        <br/>
        
      <h4>Welcome {this.state.name+'!'}</h4>
    </div>
    );
  }
}

