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
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          //Todo: Save on database .......
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
    
    render() {
      const {
        user,
        signOut,
        signInWithGoogle,
      } = this.props;

      return (
        <div className="App">
            <header className="App-header">
            {
                user
                ? <p>Hello, {user.uid}</p>
                : <p>Please sign in.</p>
            }
            {
                user
                ? <button onClick={signOut}>Sign out</button>
                : <button onClick={this.createUser}>Sign Up</button>
            }
            <form>
              {"Email:"}<input type="text" placeholder="no-reply@finditquick.com" onChange={this.emailChanged}></input>
              {"Password"}<input type="password" placeholder="*********" onChange={this.passChanged}></input>
            </form>

            </header>
          <h1>{this.props.firebase}</h1>
      </div>
      );
    
    }
}


/**
ToDO:
return success to user 
input fields

  **/
 
  