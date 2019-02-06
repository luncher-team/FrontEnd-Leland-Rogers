import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavHead extends Component {

  render() {
    return (
      <div className="navHead">
        <h1>Luncher</h1>
        <div className="navLinks">
        <Link to='/'>Home</Link>
        <Link to={'/donate'} >Donate</Link>
        </div>
      </div>
    )
  }
}
