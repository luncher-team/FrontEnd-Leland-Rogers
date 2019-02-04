import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default function DonateForm() {
  return (
    <div>
      <Form>
          <Label for="school">School Name</Label>
          <Input type="text" name="school" id="school" placeholder="School name" />
          
      </Form>
    </div>
  )
}