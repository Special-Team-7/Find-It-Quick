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
import MapsPage from './pages/MapsPage';
import HomePage from './pages/HomePage';
import BathroomList from './components/bathroom-lists/BathroomList';

import './App.css';

//Firebase stuff
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};
 
function Navigation(props) {
  return (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse aria-expanded=false" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item"> 
          <NavLink className="nav-link" exact to="/Login">
            Login
          </NavLink>
        </li>
        <li className="nav-item"> 
          <NavLink className="nav-link" exact to="/Register">
            Register
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/Maps">
            Google Maps
           </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/BathroomList">
            Bathroom List
           </NavLink>
        </li>
      </ul>
    </div>
    <Link className="navbar-brand" to="/">
      <img src={ require('./public/logo.png')} width = "70px" height="40px" />
      Find It Quick
    </Link>
    {/* <div className="collapse navbar-collapse aria-expanded=false" id="navbarSupportedContent" >
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div> */}
  </nav>
  );
}



class App extends React.Component {
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
                <Route path="/Maps" component={MapsPage} />
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
