// View holder for school map for integration within other components

import React, { Component } from 'react'
import Schools from '../components/Schools/Schools';

export default class SchoolView extends Component {

  render() {
    return (
      <React.Fragment>
        {/* <div> */}s
          <Schools {...this.props} />
        {/* </div> */}
      </React.Fragment>
    )
  }
}
