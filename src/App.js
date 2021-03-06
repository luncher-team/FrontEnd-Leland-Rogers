import React, { Component } from 'react';
import Landing from './view/Landing';
import { fetchSchools, fetchUser, addSchool, giveDonation, login, getSchool, editSchool, removeSchool } from './actions';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import NavHead from './components/Nav/NavHead';
import LoginForm from './components/Login/LoginForm';
import DonationHome from './view/DonationHome';
import AdminHome from './view/AdminHome';
import RegisterForm from './components/Login/RegisterForm';
import SchoolPage from './components/Schools/SchoolPage';
import './css/index.css';
import './css/leaflet.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      initialized: false,
    }
  }

  componentDidMount() {
    if(!this.state.initialized){
    this.props.fetchSchools();
    }
    this.setState({
      initialized: true
    })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.schools.length !== this.props.schools.length) {
      this.props.fetchSchools();
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <NavHead />
          <Switch>
          <Route exact path="/" render={(props) => <Landing {...this.props} />} />
          <Route exact path='/donate' render={(props) => <DonationHome {...this.props} {...props} />} />
          <Route exact path='/admin' render={(props) => <AdminHome {...this.props} {...props} />} />
          <Route path={`/login`} render={(props) => <LoginForm {...props} {...this.props} />} />
          <Route path={`/register`} render={(props) => <RegisterForm {...props} />} />
          <Route path={`/schools/:id`} render={(props) => <SchoolPage {...props} {...this.props} />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    schools: state.schools,
    isFetching: state.isFetching,
    error: state.error,
    login: state.login,
    loggingIn: state.loggingIn,
    loggedInName: state.loggedInName,
    loggedIn: state.loggedIn,
    getSchool: state.getSchool,
    thisSchool: state.thisSchool,
    editSchool: state.editSchool,
    giveDonation: state.giveDonation,
    userInfo: state.userInfo,
    fetchUser: state.fetchUser,
    removeSchool: state.removeSchool
  };
};

export default connect(mapStateToProps, { fetchSchools, addSchool, editSchool, removeSchool, giveDonation, login, getSchool, fetchUser })(App);
