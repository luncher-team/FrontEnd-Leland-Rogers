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
    console.log(this.props.userInfo)
    return (
      <div>
          <Authenticate />
         <div>
        <div className="jumboAdmin">
          <div className="jumboButtons">
          </div>
        </div>
        <div className="bottomContentAdmin">
          <div className="listedAdmin">
            <SchoolView {...this.props} />
          </div>
          <div className="adminInfo">
            <h3>
              Admin info
            </h3>
            <div className="adminInfoData">

            </div>
            <AddSchool {...this.props} />
          </div>
        </div>
      </div>
      </div>
    )
  }
}
