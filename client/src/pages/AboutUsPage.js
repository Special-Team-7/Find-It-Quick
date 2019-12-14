import React from 'react';
import './AboutUsPage.css'

class AboutUsPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="jumbotron AboutUsBox">
            <h1> How It All Started </h1>
            <hr/>
            <div className="row justify-content-center">
                <h2><u>Our Motivation</u></h2>
            </div>
            <div className = "row justify-content-center">
                <p>The motivation for this application came from past experiences. 
                    We would walk around New York City and someone would need to go to the bathroom, 
                    and it would be almost impossible to find one without having to pay for something or having to wait in a long line. 
                    The people who would use this application would be people who generally can’t hold it in or have trouble with dealing with it. </p>
            </div>
            <hr/>
            <div className="row justify-content-center">
                <h2><u>What We Made</u></h2>
            </div>
            <div className = "row justify-content-center">
                <p>Find It Quick is a information/rating-based web application, similar to Yelp and Waze. 
                    This application is used to help locate bathrooms. The bathrooms would be categorized and filtered such as public, mall, park, customers only; 
                    in addition to crowdedness of the bathroom. </p>
            </div>
            <hr/>
            <div className = "row justify-content-center">
            <h2><u>Our Developers:</u></h2>
            </div>
            <div className = "row">
                <div className = "col order-first">
                    <img src={ require('../public/anthony.png')}  alt = "Anthony" />
                    <br/>
                    <h4>Anthony Bravo</h4>
                </div>
                <div className = "col order-last">
                    <h4><u>LinkedIn:</u></h4>
                    <a href="https://www.linkedin.com/in/abravo3641/" target="_blank">https://www.linkedin.com/in/abravo3641/</a>
                    <br/>
                    <h4><u>GitHub:</u></h4>
                    <a href="https://github.com/abravo3641" target="_blank">https://github.com/abravo3641</a>
                </div>
            </div>
            <hr/>
            <div className = "row">
                <div className = "col order-first">
                    <img src={ require('../public/chibi.jpg')}  alt = "Kevin" />
                    <br/>
                    <h4>Kevin Chen</h4>
                </div>
                <div className = "col order-last">
                    <h4><u>LinkedIn:</u></h4>
                    <a href="https://www.linkedin.com/in/kevinchen07cd/" target="_blank">https://www.linkedin.com/in/kevinchen07cd/</a>
                    <br/>
                    <h4><u>GitHub:</u></h4>
                    <a href="https://github.com/ChibiKev" target="_blank">https://github.com/ChibiKev</a>
                </div>
            </div>
            <hr/>
            <div className = "row">
                <div className = "col order-first">
                    <img src={ require('../public/josue.png')}  alt = "Josue" />
                    <br/>
                    <h4>Josue Hernandez</h4>
                </div>
                <div className = "col order-last">
                    {/* <h4><u>LinkedIn</u></h4>
                    <a href="https://www.linkedin.com/in//" target="_blank">Josue Hernandez</a>
                    <br/> */}
                    <h4><u>GitHub:</u></h4>
                    <a href="https://github.com/josueh6758" target="_blank">https://github.com/josueh6758</a>
                </div>
            </div>
            <hr/>
            <div className = "row">
                <div className = "col order-first">
                    <img src={ require('../public/yuk.png')}  alt = "Yukkee" />
                    <br/>
                    <h4>Yukkee Chang</h4>
                </div>
                <div className = "col order-last">
                    <h4><u>LinkedIn:</u></h4>
                    <a href="https://www.linkedin.com/in/yukkee-chang/" target="_blank">https://www.linkedin.com/in/yukkee-chang/</a>
                    <br/>
                    <h4><u>GitHub:</u></h4>
                    <a href="https://github.com/yukkeechang" target="_blank">https://github.com/yukkeechang</a>
                </div>
            </div>
        </div>
    );
  }
}

export default AboutUsPage;