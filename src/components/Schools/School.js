import React from 'react';
import {  CardTitle, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import LunchPic from '../../assets/img/iStock_18527828_MEDIUM.png';


export default function School(props) {
  return (
    <React.Fragment>
      {/* <Card> */}
        <div className="col-12 col-sm-6 col-lg-4 my-4 centered">
          <div className="card">
            <img  src={LunchPic} className="card-img-top" alt="School Lunch" />
            <div className="card-body">
              <CardTitle><h4 className='card-title'>{props.name}</h4></CardTitle>
              <CardBody className='card-text'>{props.description}</CardBody>
              {/* <CardBody className='card-text'>{props.requestedFunds}</CardBody> */}

              {/* <div className="italic donation-need"> $33 </div> */}

              <Link to={`/schools/${props.id}`} className='donate-now'>Donate</Link>
            </div>
          </div>
        </div>
      {/* </Card> */}
    </React.Fragment>
  )
}

