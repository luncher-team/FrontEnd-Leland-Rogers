import React, { Component } from 'react'
import { Form, Input } from 'reactstrap';
import RegisterForm from './RegisterForm';
import { Link } from 'react-router-dom';

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

          <div className="login">
            <h3>Log In below...</h3>

            <Form onSubmit={this.handleSubmit}>
              <div class="input">
                <Input
                  name="username"
                  placeholder="Username" 
                  value={this.state.username}
                  onChange={this.handleChange}
                  type="text"
                />
              </div>
              <div class="input">
                <Input
                  name="password" 
                  placeholder="Password" 
                  value={this.state.password}
                  onChange={this.handleChange}
                  type="password"
                />
              </div>

              <div className="login-register-buttons">
                <button className="formButton btn" type="submit">Sign-In</button>
                <RegisterForm {...this.props} />
              </div>

            </Form>
          </div>            
            
    )
  }
}
