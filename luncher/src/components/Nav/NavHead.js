import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavHead extends Component {

  render() {
    return (

        <nav>
          <h1><Link to='/'>Luncher</Link></h1>
          <ul>
            <li><Link to='donate' className='btn'>Donate</Link></li>
            <li><Link to='login' className='btn'>Sign-In</Link></li>
          </ul>
        </nav>

    )
  }
}
