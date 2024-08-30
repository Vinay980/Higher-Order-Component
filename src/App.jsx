import { useState } from 'react'
import './App.css'
import HigherOrderFn from './HigherOrderFn'
import Child from './Child'
import NewComponent from './Child'
import NewComponent1 from './Child2' 

function App() {

  return (
    <>
      {/* <h1>hi</h1> */}
      {/* <HigherOrderFn/> */}
      {/* <Child/> */}
      <NewComponent name='Vinay'/>
      <NewComponent name='Rohit'/>
      <NewComponent1 age={25} />
    </>
  )
}

export default App
