//Home for donations list holding school cards

import React, { Component } from 'react'
import SchoolView from './SchoolView';
import { Link } from 'react-router-dom';
// import Ruskin from '../assets/img/7995804478_c2fac1e07a_b.jpg';

export default class DonationHome extends Component {
  render() {
    return (
      <React.Fragment>
      <div className="donate">

        <section className="schools-by-state">
          <div className="school-filter-bar">
            <h1>Donate</h1>
            <p>These schools need donations, now</p>
            {/* <p>Filter school by state</p>
            <div className="container">
              <div className="row">
                <div className="col-6 col-sm-4 col-md-2 py-2 centered"><div className="state-labels"><Link to="" className="btn">AL</Link></div></div>
                <div className="col-6 col-sm-4 col-md-2 py-2 centered"><div className="state-labels"><Link to="" className="btn">CA</Link></div></div>
                <div className="col-6 col-sm-4 col-md-2 py-2 centered"><div className="state-labels"><Link to="" className="btn">HI</Link></div></div>
                <div className="col-6 col-sm-4 col-md-2 py-2 centered"><div className="state-labels"><Link to="" className="btn">LA</Link></div></div>
                <div className="col-6 col-sm-4 col-md-2 py-2 centered"><div className="state-labels"><Link to="" className="btn">NY</Link></div></div>
                <div className="col-6 col-sm-4 col-md-2 py-2 centered"><div className="state-labels"><Link to="" className="btn">NV</Link></div></div>
                <div className="col-6 col-sm-4 col-md-2 py-2 centered"><div className="state-labels"><Link to="" className="btn">OR</Link></div></div>
                <div className="col-6 col-sm-4 col-md-2 py-2 centered"><div className="state-labels"><Link to="" className="btn">SC</Link></div></div>
                <div className="col-6 col-sm-4 col-md-2 py-2 centered"><div className="state-labels"><Link to="" className="btn">TX</Link></div></div>
                <div className="col-6 col-sm-4 col-md-2 py-2 centered"><div className="state-labels"><Link to="" className="btn">WA</Link></div></div>
              </div>
            </div> */}
          </div>
        </section>


        <section className="schools mb-5">
          <div className="container-fluid">
            <div className="row">

              <SchoolView {...this.props} />
              
            </div>
          </div>
        </section>

        <section>
          <a href="#contact" className="divider"><i className="leading-arrow fas fa-arrow-alt-circle-down"></i></a>
        </section>
        
        <section className="container-basic donate-footer">

          <section className="contact" id="contact">
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

      </div>

      </React.Fragment>
    )
  }
}
