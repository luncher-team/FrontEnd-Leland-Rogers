import React from 'react'
import School from './School';

export default function Schools(props) {
  return (
    <div>
      props.schools.map(school => {
          <School school={school} />
      })
    </div>
  )
}