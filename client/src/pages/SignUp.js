import React from 'react';
import * as firebase from 'firebase/app';


export default class SignUp extends React.Component {
    state = {
        name: "",
        email: "",
        password:""
      };
    
      createUser = (e) => {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorMessage)
        });
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
                : <button onClick={this.createUser}>Sign in with Google</button>
            }
            <form>
              {"Email:"}<input type="text" placeholder="no-reply@finditquick.com" ></input>
              {"Password"}<input type="password" placeholder="*********"></input>
            </form>

            </header>
      </div>
      );
    
    }
}


/**
ToDO:
return success to user 
input fields

  **/
 
  