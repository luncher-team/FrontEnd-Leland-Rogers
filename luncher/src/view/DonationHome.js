import React, { Component } from 'react'
import SchoolView from './SchoolView';
import { Link } from 'react-router-dom';
export default class DonationHome extends Component {
  render() {
    return (
      <div className="donate">

        
          <SchoolView {...this.props} />
           

      </div>
    )
  }
}
