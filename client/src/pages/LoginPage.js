import React from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../firebaseConfig';



export default class LoginPage extends React.Component {

  state = {
    email:"",
    password:"",
    name:""
  };

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
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  }

  render() {

    return (
      <div className="App">
          <header className="App-header">
            <h4>Sign in!</h4>
            <form>
              <br/>
              {"Email:"}<input type="text" placeholder="no-reply@finditquick.com" onChange={this.emailChanged}></input>
              <br/>
              <br/>
              {"Password"}<input type="password" placeholder="*********" onChange={this.passChanged}></input>
              <br/>
              <br/>
            </form>
            <button onClick={this.loginUser}>Login</button>
            <br/>
            <br/>
            <h4>Welcome {this.state.name+'!'}</h4>
          </header>
    </div>
    );
  }
}

