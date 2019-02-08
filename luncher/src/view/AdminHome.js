import React, { Component } from 'react';
import SchoolView from './SchoolView';
import AddSchool from '../components/Schools/AddSchool';
import Authenticate from '../authentication/Authenticate';


export default class AdminHome extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    componentDidMount(){
      if(this.props.userInfo === Array[0]) {
        this.login()
      }
    }
  render() {
    return (
      <div>
          <Authenticate />
        
            <AddSchool {...this.props} />

      </div>
    )
  }
}
