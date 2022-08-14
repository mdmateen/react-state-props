import React from 'react'

export const MyNameDisplay = (props) => {

const name ="Riyaz"
  return (
    <>
        <p>My Name is </p><i>{props.emp.name}</i><br/>
        <p>Age is</p> {props.emp.age}

    </>
  )
}
