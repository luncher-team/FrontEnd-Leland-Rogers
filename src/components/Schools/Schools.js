import React from 'react'
import School from './School';

export default function Schools(props) {
  if(props.schools){
  return (
    <React.Fragment>
      {props.schools.map(school => (
          <School 
            id={school.id} 
            name={school.name} 
            description={school.description}
            key={Date.now()+Math.random()} />
      ))}
    </React.Fragment>
  )
      } else {
        return <h1>Currently loading...</h1>
      }
}
