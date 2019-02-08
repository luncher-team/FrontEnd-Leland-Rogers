//Landing page for the whole website

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Landing extends Component {
  // // Not sure how to import my script
  // componentDidMount () {
  //   const script = document.createElement("script");

  //   script.src = "../js/element-slide.js";
  //   script.async = true;

  //   document.body.appendChild(script);
  // }

  render() {
    return (
      <React.Fragment>
      <div className="landing-page">
        <div className="splash">
        
          <div className="splash-image">
            <div className="splash-overlay"></div>
          </div>

          <div className="tagline">
            <h2>Help feed children, today!</h2>
              <br></br>
            <Link to='./donate'><div className="btn">Donate</div></Link>
          </div>
          
        </div>
      </div>

      <section>
        <Link to='#luncher-info' className='divider'>
          <i className="leading-arrow fas fa-arrow-alt-circle-down"></i>
        </Link>
      </section>

      <section className="container-basic home">
        <section className="luncher-info" id="luncher-info">
          <Link to='./signin' className="">
            <div className="info-button">Sign-in or Register</div>
          </Link>

          <div className="grid">


            <div className="icon-slider">
              <p className=" icon-left "><i className="fas fa-info"></i></p>
              <p className=" text-left ">There are kids who need healthy meals at school<br></br>
                Find a school in need, today, and help feed hungry kids</p>
            </div>
          

            <div className="icon-slider">
              <p className=" text-right ">Register today and help a school feed students in need</p>
              <p className=" icon-right "><i className="fas fa-school"></i></p>
            </div>


            <div className="icon-slider">
              <p className=" icon-left "><i className="fas fa-hand-holding-usd"></i></p>
              <p className=" text-left ">Sign-up and your donations are tax-deductable</p>
            </div>

            
            <div className="icon-slider">
              <p className=" text-right ">100% of your money goes to school lunches<br></br>
                and helps kids that need it the most</p>
              <p className=" icon-right "><i className="fas fa-heart"></i></p>
            </div>
          
          </div>
        </section>

        <section className="school-map">
          <div>
            <h3>Map of Schools</h3>
            <p className="description">
              Find schools near you that need donations now
            </p>
            <p className="map" id="mapid">~ This is a map ~
            </p>
          </div>
        </section>


        <section className="newsletter">
          <div className="newsletter-overlay">
            
            <div className="form">

              <div className="container-form">
                <h3>Subscribe to our Newsletter</h3>
                <p>Stay up to date with the latest Luncher news</p>
                <br></br>
                <br></br>
                <p>~ There is a form (name, email) that goes here ~</p>
                <br></br>
                <br></br>
                <div className="btn" type="submit">
                  Subscribe
                </div>
              </div>
            
            </div>

          </div>
        </section>


        <section className="contact">
          <div className="grid-col-4">
            <h3>Contact Us</h3>

            <p className=" icon">
              <i className="fas fa-envelope"></i>
            </p>
            <p className=" text" id="mapid">
              get@luncher.app
            </p>
            <Link to=''><i className="social fab fa-twitter"></i></Link>
            <p className="social-text">Follow us on Twitter!</p>
            
            <p className=" icon">
              <i className="fas fa-phone"></i>
            </p>
            <p className=" text" id="mapid">
              1-800-YUM-GIFT
            </p>
            <Link to=''><i className="social fab fa-patreon"></i></Link>
            <p className="social-text">Be our patrons on Patreon!</p>

            <p className=" icon">
              <i className="fas fa-map-marker-alt"></i>
            </p>
            <p className=" text" id="mapid">
              111 Yosemite Way<br></br>
              Mendocino, CA
            </p>
            <Link to=''><i className="social fas fa-share-square"></i></Link>
            <p className="social-text">Share this page!</p>

          </div>
        </section>
      
      </section>


      <footer>
        <p>Copyright Luncher 2019</p>
      </footer>

      </React.Fragment>
    )
  }
}
