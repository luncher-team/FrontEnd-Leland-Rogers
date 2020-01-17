import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavHead extends Component {

  logoutLogin(){
    if(localStorage.getItem('jwt')){
      return(
        <li><Link to='/admin' className='btn'>Admin</Link></li>
      ) 
      } else {
        return (
          <li><Link to='/login' className='btn'>Sign-In</Link></li>
        )
      }
    }

  render() {
    return (

        <nav>
          <h1><Link to='/'>Luncher</Link></h1>
          <ul>
            <li><Link to='/donate' className='btn'>Donate</Link></li>
            {this.logoutLogin()}
          </ul>
        </nav>

    )
  }
}
