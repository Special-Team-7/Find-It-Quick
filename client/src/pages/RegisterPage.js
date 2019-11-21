import React from 'react';
import * as firebase from 'firebase/app';


export default class RegisterPage extends React.Component {
      state = {
        name: "",
        email: "",
        password:""
      };
      
      //Create user in Firebase
      createUser = (e) => {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(data => {
          data.user.updateProfile({displayName:this.state.name});
          let usr = {
            id: data.user.uid,
            name: this.state.name,
            email: this.state.email
          }

          // Make post request to save on the DB
          fetch('/api/user/register',{
            method:'POST',
            body: JSON.stringify(usr),
            headers: {
              'Content-Type': 'application/json'
            }
          }).then(res => {
            if(res.ok) {
              console.log('Created user successfully');
            }
            else {
              throw new Error('Error creating user');
            }
          })

        }).catch(error => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorMessage)
        });
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

      nameChanged = (e) => {
        this.setState({
          name: e.target.value
        })
      }
    
    render() {

      return (
        <div className="App">
            <header className="App-header">
            <h4>Fill the form below to Register!</h4>
            <form>
              <br/>
              {"Name:"}<input type="text" placeholder="Your Name" onChange={this.nameChanged}></input>
              <br/>
              <br/>
              {"Email:"}<input type="text" placeholder="no-reply@finditquick.com" onChange={this.emailChanged}></input>
              <br/>
              <br/>
              {"Password"}<input type="password" placeholder="*********" onChange={this.passChanged}></input>
              <br/>
              <br/>
            </form>

            <button onClick={this.createUser}>Sign Up</button>

            </header>
      </div>
      );
    
    }
}

 
  