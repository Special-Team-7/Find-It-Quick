import React from 'react';
import Maps from '../components/google-maps/Maps';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import '../App.css'
import gray from '../public/gray.png';
import phoneBuilding from '../public/phoneBuilding.png';
import phoneMockup from '../public/phone-mockup-two.png';
import phoneMockupEmpty from '../public/phoneMockupEmpty.png';


class Landing extends React.Component {
  constructor() {
    super();
  }



  render() {
      return (
        <div className="container">
          <div className="row">
            {/*=======Section 1===========*/}
            <div className="container gradient-skyblue pt-5 pb-5">
              <div className="row">
                <div className="col-lg-5 col-md-5 col-sm-12">
                  <div className="abrilfont title navyfont text-left pl-3">Need to Go?</div>
                  <div className="abrilfont title navyfont text-left pl-3">Find it Quick</div>
                  <br/>
                  <div className="subtitle navyfont text-left pl-3">Find public restrooms fast, in anywhere and anytime.</div>
                </div>
                <div className="col-lg-7 col-md-7 col-sm-12">
                  <img className="img-fluid center img-70"  src={phoneBuilding}/>
                </div>
              </div>
            </div>
            <div className="pb-3 blackfont">placeholder</div>

            {/*=======Section 2===========*/}
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-sm-12 background-purple pt-5 pb-5">
                  <img className="img-fluid center img-70"  src={phoneMockup}/>
                </div>
                <div className="col-lg-6 col-sm-12 background-white pt-5 pb-5">
                  <div className="abrilfont title navyfont text-left pl-3">Access at the tip of your fingers</div>
                  <br/>
                  <div className="subtitle navyfont text-left pl-3">Find it Quick displays the best and nearest restrooms in your area based on your needs</div>
                </div>
              </div>
            </div>
            <div className="pb-3 blackfont">placeholder</div>
            {/*=======Section 3===========*/}
            <div className="container background-skyblue pt-5">
              <div className="row">
                <div className="col-12 abrilfont title text-left pl-3">Coming Soon!</div>
                <div className="col-12 abrilfont title navyfont text-left pl-3">Access code?</div>
                <div className="col-12 abrilfont title navyfont text-left pl-3">Customer exclusive? </div>
                <div className="col-lg-6 col-sm-12 ">
                  <div className="subtitle navyfont text-left pl-3">Forget about spending $5 for a drink just to use the restroom. </div>
                  <hr/>
                  <div className="subtitle navyfont text-left pl-3">For $1, get restroom access and credit toward partnered business  </div>
                </div>
                <div className="col-lg-3 col-sm-6 pt-5">
                  <img className="img-fluid center"  src={phoneMockupEmpty}/>
                </div>
                <div className="col-lg-3 col-sm-6 pt-5">
                  <img className="img-fluid center"  src={phoneMockupEmpty}/>
                </div>
              </div>
            </div>

          </div>

        </div>
      );
    }
  }

export default Landing;
