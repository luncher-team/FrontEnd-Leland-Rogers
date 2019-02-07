import React, {Component} from 'react'
import School from './School';


class Schools extends Component {
  
  componentDidMount() {
    this.props.fetchSchools();
  }
  render(){
  return (
    <div className="schoolGrid">
      {this.props.schools.map(school => (
          <School school={school} {...this.props} key={Date.now()+Math.random()} />
      ))}
    </div>
  )
      }
}

export default Schools