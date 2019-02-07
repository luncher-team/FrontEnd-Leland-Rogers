import React from 'react';
import { Card, CardTitle, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';


export default function School(props) {
  return (
    <Card className="schoolCard">
    <CardBody>
      <CardTitle>
      <Link to={`/schools/${props.id}`}>
        <h3>
          {props.name}
        </h3>
         </Link>
      </CardTitle>
        {props.description}
        {props.requestedFunds}
      </CardBody>
    </Card>
  )
}

