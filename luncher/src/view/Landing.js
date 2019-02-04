import React, { Component } from 'react'

export default class Landing extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchSchools();
  }


  render() {
    return (
      <div>
        Welcome! Please make a choice:

      </div>
    )
  }
}
