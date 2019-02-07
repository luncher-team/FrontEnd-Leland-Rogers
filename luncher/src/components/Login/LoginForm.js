import React, { Component } from 'react'
import { Form, Input } from 'reactstrap';
import RegisterForm from './RegisterForm';

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
    this.props.login(this.state);
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
                    <button className="formButton" type="submit">Signin</button>
                    <RegisterForm {...this.props} />
                </div>
            </Form>
      </div>
    )
  }
}
