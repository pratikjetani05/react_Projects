import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

   let [counter,setCounter] = useState(15)
  // let counter = 5

  const addvalue = ()=>{
  
    setCounter(counter +1)
  }

  const removeValue = ()=>{
    setCounter(counter-1)
  }

  return (
    <>
      <h1>Hello pratik</h1>
      <h2>Count value :{counter }</h2>
      <button onClick={addvalue}>Add value </button>
      <br />
      <button onClick={removeValue}>Remove value </button>
    </>
  )
}

export default App
