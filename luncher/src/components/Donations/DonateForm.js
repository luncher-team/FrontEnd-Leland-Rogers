//Form for donations

import React, { Component } from 'react'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';


export default class DonateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      school: this.props.donateschool,
      id: this.props.id,
      curAmt: this.props.donated,
      donation: 0
    }
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
    if(this.state.curAmt === null){
      this.setState({
        curAmt: 0
      })
    }
    let donAdd = Number(this.state.donation) + Number(this.state.curAmt);
    this.props.giveDonation(donAdd, this.state.id, requestOptions);
    this.setState({
      donation: 0,
      curAmt: this.props.donated
    })
  }

  render() {
    console.log(this.state.curAmt)
    return (
      <div className="donateForm">
      <Form onSubmit={e => this.handleSubmit(e)}>
          <FormGroup>
            <Row form>
              <Col md={12}>
                <Label for="donation">Donation Amount</Label>
                <Input type="number" onChange={this.handleChange} name="donation" id="donation" placeholder="Donation amount" />
              </Col>
            </Row>
            <Row form>
              <Col md={12}>
                <Label for="noC">Name on Card</Label>
                <Input type="text" name="noC" id="noC" placeholder="Name on Card" />
              </Col>
            </Row>
          <Row form>
              <Col md={12}>
                <Label for="numC">Card Number</Label>
                <Input type="number" name="numC" maxLength="12" id="numC" placeholder="Card Number" />
              </Col>
          </Row>
          <Row form>
              <Col md={6}>
                <Label for="expDate">Expiration Date</Label>
                <Input type="text" name="expDate" maxLength="4" id="expDate" placeholder="Expiration date" />
              </Col>
              <Col md={6}>
                <Label for="secC">Security Code</Label>
                <Input type="number" name="secC" maxLength="3" id="secC" placeholder="Security code" />
              </Col>  
          </Row>  
          </FormGroup> 
          <Button onClick={e => this.handleSubmit(e)}>Submit</Button>
      </Form>
      </div>
    )
  }
}
