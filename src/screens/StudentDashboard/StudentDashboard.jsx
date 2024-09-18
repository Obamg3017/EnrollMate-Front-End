import React from 'react'

export const StudentDashboard = ({student}) => {
    const json = JSON.stringify(student)
  return (
    <div>{json}</div>
  )
}
