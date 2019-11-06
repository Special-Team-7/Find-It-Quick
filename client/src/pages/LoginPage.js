import React from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);


function LoginPage(props) {
  return (
    <div>LOGIN PAGE</div>
  );
}

export default LoginPage;