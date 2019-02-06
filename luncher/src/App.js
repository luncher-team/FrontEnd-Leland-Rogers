import React, { Component } from 'react';
import './App.css';
import Landing from './view/Landing';
import SchoolView from './view/SchoolView';
import { fetchSchools, addSchool } from './actions';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import NavHead from './components/Nav/NavHead';
import SchoolPage from './components/Schools/SchoolPage';
import Authenticate from './authentication/Authenticate';
import LoginForm from './components/Login/LoginForm';
import DonationHome from './view/DonationHome';

class App extends Component {

  componentDidMount() {
    this.props.fetchSchools();
    console.log(this.schools)
  }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.schools.length !== this.props.schools.length) {
  //     this.props.fetchSchools();
  //   }
  // }

  render() {
    return (
      <Router>
        <div className="App">
          <Authenticate />
          <NavHead />
          <Switch>
          <Route exact path="/" render={(props) => <Landing {...this.props} />} />
          <Route exact path='/donate' render={(props) => <DonationHome {...this.props} {...props} />} />
          <Route path={`/login`} render={(props) => <LoginForm {...props} />} />
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
    error: state.error
  };
};

export default connect(mapStateToProps, { fetchSchools, addSchool })(App);
