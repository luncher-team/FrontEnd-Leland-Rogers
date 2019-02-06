import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


export default class DonateForm extends Component {
  render() {
    return (
      <div>
      <Form>
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
      </Form>
      </div>
    )
  }
}
