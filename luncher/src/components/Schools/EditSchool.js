import React, { Component } from 'react';
import { Form, Input, Button, FormGroup, Modal } from 'reactstrap';

export default class EditSchool extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curSchool: this.props.thisSchool.name,
      curDescription: this.props.thisSchool.description,
      curAddress: this.props.thisSchool.address,
      curFunds: this.props.thisSchool.requested_funds,
      id: this.props.thisSchool.id,
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
      id: this.state.id,
      name: this.state.curSchool,
      description: this.state.curDescription,
      address: this.state.curAddress,
      requested_funds: this.state.curFunds
    }
    this.props.editSchool(schoolHold, requestOptions);
    this.setState({
      curSchool: '',
      curDescription: '',
      curAddress: '',
      curFunds: '',
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
        <Button color="primary" onClick={this.toggle}>Edit School</Button>
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
            <Input required onChange={this.handleChange} type="number" placeholder="Funds requested" name="curFunds" value={this.state.curFunds} />

          </FormGroup>
          <Button>Submit</Button>
        </Form>
        </Modal>
      </div>
    )
  }
}