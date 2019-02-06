import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


export default class DonateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      school: this.props.school,
      curAmt: this.props.donated,
      donamt: null
    }
  }

  componentDidMount() {
    const requestOptions = {
      headers: {
        authorization: localStorage.getItem('jwt')
      }
    }
    this.setState({
      requestOptions: requestOptions
    })
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    let donAdd = this.state.donamt + this.state.curAmt;
    this.props.giveDonation(donAdd, this.state.school.id, this.state.requestOptions);
    this.setState({
      donamt: null
    })
  }

  render() {
    return (
      <div>
      <Form onSubmit={e => this.handleSubmit(e)}>
          <Label for="donation">Donation Amount</Label>
          <Input type="number" name="donation" id="donation" placeholder="Donation amount" />
          <Label for="noC">Name on Card</Label>
          <Input type="text" name="noC" id="noC" placeholder="Name on Card" />
          <Label for="numC">Card Number</Label>
          <Input type="number" name="numC" id="numC" min="12" max="12" placeholder="Card Number" />
          <Label for="expDate">Expiration Date</Label>
          <Input type="text" name="expDate" id="expDate" placeholder="Expiration date" />
          <Label for="secC">Security Code</Label>
          <Input type="number" name="secC" id="secC" placeholder="Security code" />     
          <Button>Submit</Button>
      </Form>
      </div>
    )
  }
}
