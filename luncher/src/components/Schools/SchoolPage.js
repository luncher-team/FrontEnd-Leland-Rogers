import React, { Component } from 'react'

export default class SchoolPage extends Component {

  componentDidMount(){
    this.props.getSchool(this.props.match.params.id);
    console.log(this.props)
  }

  render() {
    console.log(this.props.thisSchool)
    return (
      <div>
        {this.props.thisSchool.name}
      </div>
    )
  }
}
