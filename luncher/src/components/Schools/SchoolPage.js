import React, { Component } from 'react'
import Authenticate from '../../authentication/Authenticate';
import DonateForm from '../Donations/DonateForm';
import { Button, Collapse } from 'reactstrap';
import EditSchool from './EditSchool';

export default class SchoolPage extends Component {
  constructor(props){
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      collapse: false,
      thisSchool: this.props.match.params.id
    }
  }

  componentDidMount(){
    this.props.getSchool(this.state.thisSchool);
    console.log(this.props)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.thisSchool.id !== this.props.thisSchool.id) {
      this.props.getSchool(this.state.thisSchool);
    }
  }
  
  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  handleDeleteSchool = () => {
    const requestOptions = {
      'Authorization': `${localStorage.getItem('jwt')}`
    }
    this.props.removeSchool(this.state.thisSchool, requestOptions)
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
       <Authenticate />
        <div className="schoolPageInfo">
          <h2>
            {this.props.thisSchool.name}
          </h2>
          <div className="schoolAbout">
            About: {this.props.thisSchool.description}
          </div>
          <div className="donateTtl">
            Total amount donated: ${this.props.thisSchool.donated}
          </div>
        </div>
        <div className="donateHold">
        <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Donate Now</Button>
          <Collapse {...this.props} isOpen={this.state.collapse}>
            <DonateForm donateschool={this.props.thisSchool}
                        donated={this.props.thisSchool.donated}
                        id={this.props.thisSchool.id}
                        giveDonation={this.props.giveDonation} />
          </Collapse>
        </div>
        <div className="adminTasks">
          <EditSchool 
                  id={this.props.thisSchool.id}
                  name={this.props.thisSchool.name}
                  description={this.props.thisSchool.description}
                  address={this.props.thisSchool.address}
                  requested_funds={this.props.thisSchool.requested_funds}
                  userInfo={this.props.userInfo}
                  editSchool={this.props.editSchool}
                   />
          <Button color="danger" onClick={this.handleDeleteSchool}>Delete</Button>
        </div>
      </div>
    )
  }
}
