import React from 'react'
import HigherOrderFn from './HigherOrderFn'

function Child2(props) {
  return (
    <>
      <h2>{props.age}</h2>
    </>
  )
}

const NewComponent1=HigherOrderFn(Child2)
export default NewComponent1