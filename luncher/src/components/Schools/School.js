import React, { Component } from 'react';
import { Button, Collapse, Card, CardTitle, CardBody } from 'reactstrap';
import { Route, Link } from 'react-router-dom';
import SchoolPage from './SchoolPage';
import DonateForm from '../Donations/DonateForm';


export default class School extends Component {
  constructor(props){
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      collapse: false,
    }
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }


  render(){
    const curID = this.props.school.id;

  return (
      <Card className="schoolCard">
      <CardBody>
        <CardTitle>
        <Link to={`/schools/${curID}`}>
          <h3>
            {this.props.school.name}
          </h3>
           </Link>
        </CardTitle>
          {this.props.school.description}
          {this.props.school.requestedFunds}
        </CardBody>
        <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Donate Now</Button>
        <Collapse isOpen={this.state.collapse}>
          <DonateForm {...this.props} />
        </Collapse>
        <Route path={`/schools/:id`} render={(props) => <SchoolPage {...props} />} />
      </Card>


  )
  }
}
