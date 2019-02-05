import React, { Component } from 'react';
import './App.css';
import Landing from './view/Landing';
import SchoolView from './view/SchoolView';
import { fetchSchools, addSchool } from './actions';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import NavHead from './components/Nav/NavHead';

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
          <NavHead />
          <Switch>
          <Route exact path="/" render={(props) => <Landing {...this.props} />} />
          <Route path='/schools' render={(props) => <SchoolView {...this.props} schools={this.props.schools} />} />
          {/* <Route path={`/schools/${curID}`} render={(props) => <SchoolPage {...this.props} school={this.props.school} />} /> */}
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
