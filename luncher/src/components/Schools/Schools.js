import React, {Component} from 'react'
import School from './School';

export default class Schools extends Component {
  render(){
  return (
    <div className="schoolGrid">
      {this.props.schools.map(school => (
          <School school={school} {...this.props} />
      ))}
    </div>
  )
      }
}
