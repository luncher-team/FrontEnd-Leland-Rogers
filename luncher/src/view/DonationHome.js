import React, { Component } from 'react'
import SchoolView from './SchoolView';

export default class DonationHome extends Component {
  render() {
    return (
      <div>
         <div>
        <div className="jumboDonate">
          <div className="jumboButtons">
          </div>
        </div>
        <SchoolView {...this.props} />
      </div>
      </div>
    )
  }
}
