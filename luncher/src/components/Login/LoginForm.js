import React, { Component } from 'react'
import { Form, Input } from 'reactstrap';
import RegisterForm from './RegisterForm';
import axios from 'axios';

export default class LoginForm extends Component {
  constructor(){
    super();
    this.state = {
      username: '',
      password: '',
    }
  }


  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    axios
    .post('https://luncher-app-backend.herokuapp.com/api/login/', this.state)
    .then(res => {
        console.log(res)
        localStorage.setItem('jwt', res.data.token);
    })
    .catch(err => console.error(err));
    if(localStorage.getItem('jwt')) {
      this.props.history.push('/')
    }
  }


  render() {
    return (
      <div className="loginForm">
      <h3>Log In below...</h3>
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
                    <RegisterForm />
                </div>
            </Form>
      </div>
    )
  }
}
