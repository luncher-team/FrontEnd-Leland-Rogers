import React from 'react'
import { Card, CardTitle, CardBody } from 'reactstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route, Link } from 'react-router-dom';
import SchoolPage from './SchoolPage';


export default function School(props) {
  const curID = props.school.id;
  return (
      <Card className="schoolCard">
      <CardBody>
        <CardTitle>
        <Link to={`/schools/${curID}`}>
          <h3>
            {props.school.name}
          </h3>
           </Link>
        </CardTitle>
          {props.school.description}
          {props.school.requestedFunds}
        </CardBody>
        <Route path={`/schools/:id`} render={(props) => <SchoolPage {...props} />} />
      </Card>


  )
}
