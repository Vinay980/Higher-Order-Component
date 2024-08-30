import React from 'react'
import HigherOrderFn from './HigherOrderFn'

function Child(props) {
  return (
    <>
        <h1>This is child component</h1>
        <h2>Name: {props.name}</h2>
        <h2>Address: {props.address}</h2>
    </>

  )
}

const NewComponent=HigherOrderFn(Child)

export default NewComponent