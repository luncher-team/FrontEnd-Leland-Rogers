import React, { Component } from 'react'
import Authenticate from '../../authentication/Authenticate';
import DonateForm from '../Donations/DonateForm';
import { Button, Collapse } from 'reactstrap';

export default class SchoolPage extends Component {
  constructor(props){
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      collapse: false,
    }
  }

  componentDidMount(){
    this.props.getSchool(this.props.match.params.id);
    console.log(this.props)
  }
  
  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div>
       <Authenticate />
        <h2>
          {this.props.thisSchool.name}
        </h2>
        <div>
          Info: {this.props.thisSchool.description}
        </div>
        <div>
          Total amount donated: ${this.props.thisSchool.donated}
        </div>
        <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Donate Now</Button>
        <Collapse {...this.props} isOpen={this.state.collapse}>
          <DonateForm {...this.props} />
        </Collapse>
      </div>
    )
  }
}
