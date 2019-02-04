import React from 'react'
import { Card, CardTitle, CardBody } from 'reactstrap';

export default function School(props) {
  return (

      <Card className="schoolCard">
        <CardTitle>
          {props.school.name}
        </CardTitle>
        <CardBody>
          {props.school.description}
          {props.school.requestedFunds}
        </CardBody>
      </Card>

  )
}
