import React, { Component } from 'react'
import Schools from '../components/Schools/Schools';

export default class SchoolView extends Component {

  render() {
    return (
      <div>
        <Schools {...this.props} />
      </div>
    )
  }
}
