import React, { Component } from 'react'
import { Form, Input } from 'reactstrap';
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
    .post('https://luncher-app-backend.herokuapp.com/register/', this.state)
    .then(res => {
        console.log(res)
        localStorage.setItem('jwt', res.data.token);
    })
    .catch(err => console.error(err));
  }


  render() {
    return (
      <div className="loginForm">
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
      </div>
    )
  }
}
