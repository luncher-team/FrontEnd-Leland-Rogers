import React, { Component } from 'react'
import { Form, Input, Button, Modal } from 'reactstrap';
import axios from 'axios';

export default class LoginForm extends Component {
  constructor(){
    super();
    this.state = {
      username: '',
      password: '',
      modal: false
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    axios
    .post('https://luncher-app-backend.herokuapp.com/schools/', this.state)
    .then(res => {
        console.log(res)
        localStorage.setItem('jwt', res.data.token);
    })
    .catch(err => console.error(err));
    this.setState({
      modal: false
    })
  }


  render() {
    return (
      <div className="loginForm">
        <Button color="primary" onClick={this.toggle}>Login</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
         <Form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="">Username</label>
                    <Input
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                        type="text"
                    />
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <Input
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        type="password"
                    />
                </div>
                <div>
                    <button type="submit">Signin</button>
                </div>
            </Form>
            </Modal>
      </div>
    )
  }
}
