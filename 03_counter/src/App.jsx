import { useState } from 'react'
import './App.css'

function App() {
  // let counter = 15
  let [ counter, setCounter ] = useState(10)

  const incrementCount = () => {
    // counter = counter + 1
    setCounter( counter + 1 )
    console.log('increment count : ', counter)
  }

  const decrementCount = () => {
    // counter = counter -1
    if(counter > 0){
      setCounter(counter - 1)
    }
    console.log('Decrement count : ', counter)
  }

  return (
    <>
      <h2>COUNTER - increments and decrements your count value</h2>
      <h3>Count : {counter}</h3>
      <button
        onClick = {incrementCount}
      > 
        Increment Count
      </button>
      <button
        onClick = {decrementCount}
      >
        Decrement Count</button>
    </>
  )
}

export default App
