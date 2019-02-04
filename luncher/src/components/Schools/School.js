import React from 'react'
import { Card, CardTitle, CardBody } from 'reactstrap';

export default function School(props) {
  return (

      <Card className="schoolCard">
        <CardTitle>
          {props.school.school}
        </CardTitle>
        <CardBody>
          {props.school.description}
        </CardBody>
      </Card>

  )
}
