import React, {Component} from 'react'
import School from './School';
import { withSnackbar } from 'notistack';


class Schools extends Component {
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

export default withSnackbar(Schools)