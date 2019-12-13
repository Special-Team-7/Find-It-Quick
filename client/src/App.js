import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from 'react-router-dom';

import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import BathroomList from './components/bathroom-lists/BathroomList';
import addBathroom from './pages/addBathroomPage';
import BathroomPage from './pages/BathroomPage';
import ReviewPage from './pages/ReviewPage';
import AboutUsPage from './pages/AboutUsPage';
import Landing from './pages/Landing'

import './App.css';

//Firebase Set up
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './components/firebase/firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

function Navigation(props) {
  let user = firebase.auth().currentUser;
  return (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse aria-expanded=false" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/Login">
            {
              user ? <span>Logout</span>:<span>Login</span>
            }
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/Register">
            Register
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/">
            Google Maps
           </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/BathroomList">
            Bathroom List
           </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/addBathroom">
            Add Bathroom
           </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/AboutUs">
            About Us
           </NavLink>
        </li>
      </ul>
    </div>
    <Link className="navbar-brand" to="/">
      <img src={ require('./public/pottyhead-blue.png')} width = "40px" height="40px" alt = "Logo" />
      Find It Quick
    </Link>
  </nav>
  );
}



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      me: firebase.auth().currentUser
    }
  }

  render() {
    return (
        <Router>
          <Navigation />
          <div className="container-fluid text-center">
            <div className="row justify-content-center">
              <Switch>
                <Route path="/BathroomList" component = {BathroomList} />
                <Route path="/Register" component={RegisterPage} />
                <Route path="/Login" component={LoginPage} />
                <Route path="/bathroom/:bathroomId" component={BathroomPage}/>
                <Route path="/addBathroom" component={addBathroom} />
                <Route path="/review/:reviewId" component={ReviewPage} />
                <Route path="/BathroomPage" component={BathroomPage} />
                <Route path="/AboutUs" component={AboutUsPage} />
                <Route path="/landing" component={Landing} />
                <Route path="/" component={HomePage} />


              </Switch>
            </div>
          </div>
        </Router>
    );
  }
}


//export default App;

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
