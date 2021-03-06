import React, { Component } from 'react';
import { Form, Input, Button, FormGroup, Modal } from 'reactstrap';

export default class AddSchool extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curSchool: '',
      curDescription: '',
      curAddress: '',
      curFunds: '',
      curCity: '',
      curState: '',
      curDonated: 0,
      modal: false
    }

    this.toggle = this.toggle.bind(this);
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    const requestOptions = {
      'Authorization': `${localStorage.getItem('jwt')}`
    }

    let schoolHold = {
      name: this.state.curSchool,
      description: this.state.curDescription,
      address: this.state.curAddress,
      requested_funds: this.state.curFunds,
      donated: this.state.curDonated,
      city: this.state.curCity,
      state: this.state.curState,
      admin_id: this.props.userInfo.id
    }
    this.props.addSchool(schoolHold, requestOptions);
    this.setState({
      curSchool: '',
      curDescription: '',
      curAddress: '',
      curFunds: '',
      curCity: '',
      curState: '',
      curDonated: 0,
      modal: false
    })
  }


  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }


  render() {
    console.log(this.props.userInfo)
    return (
      <div className="addSchoolDiv">
        <Button color="primary" onClick={this.toggle}>Add School</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        <Form onSubmit={e => this.handleSubmit(e)}>
          <FormGroup>
            <Input required onChange={this.handleChange} type="text" placeholder="School name" name="curSchool" value={this.state.curSchool} />
            </FormGroup>
            <FormGroup>
              <Input required onChange={this.handleChange} type="textarea" placeholder="School description" name="curDescription" value={this.state.curDescription} />
            </FormGroup>
            <FormGroup>
              <Input required onChange={this.handleChange} type="text" placeholder="School address" name="curAddress" value={this.state.curAddress} />
            </FormGroup>
            <FormGroup>
              <Input required onChange={this.handleChange} type="text" placeholder="City" name="curCity" value={this.state.curCity} />
            </FormGroup>
            <FormGroup>
              <Input required onChange={this.handleChange} type="text" placeholder="State" name="curState" value={this.state.curState} />
            </FormGroup>
            <FormGroup>
            <Input required onChange={this.handleChange} type="number" placeholder="Funds requested" name="curFunds" value={this.state.curFunds} />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
        </Modal>
      </div>
    )
  }
}