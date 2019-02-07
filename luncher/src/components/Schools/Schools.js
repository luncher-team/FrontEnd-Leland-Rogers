import React from 'react'
import School from './School';

export default function Schools(props) {
  if(props.schools){
  return (
    <div className="schoolGrid">
      {props.schools.map(school => (
          <School 
            id={school.id} 
            name={school.name} 
            description={school.description}
            key={Date.now()+Math.random()} />
      ))}
    </div>
  )
      } else {
        return <h1>Currently loading...</h1>
      }
}
