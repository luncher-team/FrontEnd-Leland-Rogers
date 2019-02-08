import React, { Component } from 'react'
import { Form, Input, Spinner } from 'reactstrap';
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

  componentDidUpdate() {
    if(this.props.loggedIn) {
      localStorage.setItem('jwt', this.props.loggedInToken)
      this.props.fetchUser(this.props.loggedInId)
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
      <React.Fragment>
      <div className='sign-in-page'>
        <section className="splash">

          <div className="splash-image">
            <div className="splash-overlay"></div>
          </div>

          <div className="login">
            <h3>Log In below...</h3>

            <Form onSubmit={this.handleSubmit}>
              <div className="input">
                <Input
                  name="username"
                  placeholder="Username" 
                  value={this.state.username}
                  onChange={this.handleChange}
                  type="text"
                />
              </div>
              <div className="input">
                <Input
                  name="password" 
                  placeholder="Password" 
                  value={this.state.password}
                  onChange={this.handleChange}
                  type="password"
                />
              </div>
              {(this.props.loggingIn ? <Spinner color="success" /> : <p></p>)}

              <div className="login-register-buttons">
                <button className="formButton btn" type="submit">Sign-In</button>
                <RegisterForm {...this.props} />
              </div>

            </Form>
          </div>            
            
        </section>

        <section>
          <div className="divider"><i className="leading-arrow fas fa-arrow-alt-circle-down"></i></div>
        </section>

        <section className="container-basic sign-in-footer">
          
          <section className="contact" id="contact">
            <div className="grid-col-4">
              <h3>Contact Us</h3>

              <p className=" icon">
                <i className="fas fa-envelope"></i>
              </p>
              <p className=" text" id="mapid">
                get@luncher.app
              </p>
              <Link to=''><i className="social fab fa-twitter"></i></Link>
              <p className="social-text">Follow us on Twitter!</p>
              
              <p className=" icon">
                <i className="fas fa-phone"></i>
              </p>
              <p className=" text" id="mapid">
                1-800-YUM-GIFT
              </p>
              <Link to=''><i className="social fab fa-patreon"></i></Link>
              <p className="social-text">Be our patrons on Patreon!</p>

              <p className=" icon">
                <i className="fas fa-map-marker-alt"></i>
              </p>
              <p className=" text" id="mapid">
                111 Yosemite Way<br></br>
                Mendocino, CA
              </p>
              <Link to=''><i className="social fas fa-share-square"></i></Link>
              <p className="social-text">Share this page!</p>

            </div>
          </section>
        
        </section>
        <footer>
          <p>Copyright Luncher 2019</p>
        </footer>

      </div>
      </React.Fragment>
    )
  }
}
