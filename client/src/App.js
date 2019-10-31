import React from 'react';

import { 
  BrowserRouter as Router, 
  Switch, 
  Route,
  Link,
  NavLink
} from 'react-router-dom';

import PostsListPage from './pages/PostsListPage';
import PostFormPage from './pages/PostFormPage';
import ShowPostPage from './pages/ShowPostPage';
import AboutUsPage from './pages/AboutUsPage';
import BathroomList from './components/bathroom-lists/BathroomList';

import './App.css';


function Navigation(props) {
  return (


//   <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//   <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//   <Navbar.Collapse id="responsive-navbar-nav">
//     <Nav className="mr-auto">
//       <Nav.Link href="#features">Features</Nav.Link>
//       <Nav.Link href="#pricing">Pricing</Nav.Link>
//     </Nav>
//     <Nav>
//       <Nav.Link href="#deets">More deets</Nav.Link>
//       <Nav.Link eventKey={2} href="#memes">
//         Dank memes
//       </Nav.Link>
//     </Nav>
//   </Navbar.Collapse>
// </Navbar>

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
                <Route path="/posts/new" component={PostFormPage} />
                <Route path="/posts/:id" component={ShowPostPage} />
                <Route path="/about-us" component={AboutUsPage} />
                <Route path="/" component={PostsListPage} />
              </Switch>
            </div>
          </div>
          <BathroomList/>
        </Router>
    );
  }
}


export default App;
