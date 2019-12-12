import React from 'react';
import './AboutUsPage.css'

class AboutUsPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="jumbotron text-center">
            <div className="row justify-content-center">
                <div className = "col-12 center">
                    <h1><u>Welcome To The About Us</u>!</h1>
                    <h2> Our Developers: </h2>
                </div>
            </div>
            <div className = "row">
                <div className = "col-3">
                    <a href="https://github.com/abravo3641" target="_blank">Anthony Bravo</a>
                </div>
            </div>
            <div className = "row">
                <div className = "col-3">
                    <a href="https://github.com/ChibiKev" target="_blank">Kevin Chen</a>
                </div>
            </div>
            <div className = "row">
                <div className = "col-3">
                <a href="https://github.com/josueh6758" target="_blank">Josue Hernandez</a>
                </div>
            </div>
            <div className = "row">
                <div className = "col-3">
                <a href="https://github.com/yukkeechang" target="_blank">Yukkee Chang</a>
                </div>
            </div>
        </div>
    );
  }
}

export default AboutUsPage;