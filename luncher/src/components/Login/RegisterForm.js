import React, { Component } from 'react'
import { Button, Modal, Form, Input } from 'reactstrap';
import axios from 'axios';

export default class RegisterForm extends Component {
  constructor(){
    super();
    this.state = {
      username: '',
      password: '',
      email: '',
      modal: false
    }
    this.toggle = this.toggle.bind(this);
  }


  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  handleSubmit = e => {
    e.preventDefault();
    const newUser = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email
    }
    axios
    .post('https://luncher-app-backend.herokuapp.com/api/register/', newUser)
    .then(res => {
        console.log(res)
        localStorage.setItem('jwt', res.data.token);
    })
    .catch(err => console.error(err));
  }


  render() {
    return (
      <div className="loginForm">
        <Button color="danger" onClick={this.toggle}>Register?</Button>
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
                    <label htmlFor="">Email</label>
                    <Input
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        type="email"
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
