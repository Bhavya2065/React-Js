import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(5)
  const [error, setError] = useState("")
  const counter = (btn) => {

    if (btn === 'increment') {
      if (count < 20) {
        setCount(count + 1)
        setError("")  // clear error when valid -> It clears the error message when the count is between the valid range (0 - 20) 
      } else {
        setError("Error: You can't increment further")
      }
    } else {
      if (count > 0) {
        setCount(count - 1)
        setError("")  // clear error when valid -> It clears the error message when the count is between the valid range (0 - 20)
      } else {
        setError("Error: You can't decrement further")
      }
    }
  }
  return (
    <>
      <h1>Counter Project</h1>
      <h2 id='count'>Counter Value: {count}</h2>
      <div id='btn-container'>
        <button id='button1' onClick={() => counter('increment')}>Increment</button>
        <button id='button2' onClick={() => counter('decrement')}>Decrement</button>
      </div>
      <h4 style={{color: 'red', fontSize: '20px'}}>{error}</h4>
    </>
  )
}

export default App

// Note: You cannot call the directly like this?

{/* <button id='button1' onClick={counter('increment')}>Increment</button> */ }

// reason: This immediately executes counter('increment') and counter('decrement') as soon as the component renders, instead of waiting for a click.