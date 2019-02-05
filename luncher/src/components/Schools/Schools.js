import React from 'react'
import School from './School';

export default function Schools(props) {
  return (
    <div className="schoolGrid">
      {props.schools.map(school => (
          <School school={school} />
      ))}
    </div>
  )
}
