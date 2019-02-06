import React, { Component } from 'react'
import Schools from '../components/Schools/Schools';
import AddSchool from '../components/Schools/AddSchool';

export default class SchoolView extends Component {

  render() {
    return (
      <div>
        <Schools {...this.props} />
      </div>
    )
  }
}
