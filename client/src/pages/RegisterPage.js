import React from 'react';
import * as firebase from 'firebase/app';
import './RegisterPage.css';

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
        <div className="registerbox">
            <h4><u>Fill the Form Below to Register!</u></h4>
            <form>
              <p>Name</p>
              <input type="text" placeholder="Enter Name" onChange={this.nameChanged}></input>
              <br/>
              <br/>
              <p>Email</p>
              <input type="text" placeholder="Enter Email" onChange={this.emailChanged}></input>
              <br/>
              <br/>
              <p>Password</p>
              <input type="password" placeholder="Enter Password" onChange={this.passChanged}></input>
            </form>
            <button type="button" className="btn btn-primary" onClick={this.createUser}>Sign Up</button>
      </div>
      );
    
    }
}

 
  