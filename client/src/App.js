import React from 'react';

import SignUp from './pages/SignUp';

import { 
  BrowserRouter as Router, 
  Switch, 
  Route,
  Link,
  NavLink
} from 'react-router-dom';

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
    <nav collapseOnSelect className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3">
      <ul className="navbar-nav mr-auto navbar-toggle">
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/posts/new">
            Create a Micro Post
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/about-us">
            About Us
          </NavLink>
        </li>
      </ul>  
      <div class = "navbar-header">
      <Link className="navbar-brand" to="/" >Find It Quick</Link>
      </div>
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
                <Route path="/signup" component={SignUp}/>
              </Switch>
            </div>
          </div>
          <BathroomList/>
        </Router>
    );
  }
}

//export default App;

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
