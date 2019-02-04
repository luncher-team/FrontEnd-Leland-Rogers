import React, { Component } from 'react';
import './App.css';
import Landing from './view/Landing';
import SchoolView from './view/SchoolView';
import { fetchSchools } from './actions';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import mockData from './mockSchoolData.json';
class App extends Component {

  // componentDidMount() {
  //   this.props.fetchSchools();
  //   console.log(this.schools)
  // }

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" render={(props) => <Landing {...this.props} />} />
          <Link to='/'>Home</Link>
          <Link to={'/schools'} >Schools</Link>
          <Route path='/schools' render={(props) => <SchoolView {...this.props} schools={mockData} />} />
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

export default connect(mapStateToProps, { fetchSchools })(App);
