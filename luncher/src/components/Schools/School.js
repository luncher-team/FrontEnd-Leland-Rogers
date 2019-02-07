import React, { Component } from 'react';
import { Card, CardTitle, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
export default class School extends Component {

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
      </Card>


  )
  }
}
