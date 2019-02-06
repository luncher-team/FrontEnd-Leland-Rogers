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
  render() {
    return (
      <div>
          <Authenticate />
         <div>
        <div className="jumboAdmin">
          <div className="jumboButtons">
          </div>
        </div>
        <div class="bottomContentAdmin">
          <div className="listedAdmin">
            <SchoolView {...this.props} />
          </div>
          <div>
            Admin info
            <AddSchool {...this.props} />
          </div>
        </div>
      </div>
      </div>
    )
  }
}
