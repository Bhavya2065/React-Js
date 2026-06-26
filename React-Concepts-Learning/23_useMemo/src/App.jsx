import { useMemo, useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0)
  const [input, setInput] = useState(0)

  /*
    --- WHAT IS useMemo? ---
    useMemo is a React Hook that caches (saves) the result of a slow calculation.
    It stops slow functions from running again on every render.

    --- HOW IT WORKS ---
    It takes two arguments:
      1. A function that performs the calculation.
      2. A dependency array (like [input]).
    It will only run the calculation when one of the dependencies in the array changes.

    --- WHY IT IS USED HERE ---
    - WITHOUT useMemo: Clicking the "Increment" button updates the 'count' state. 
      This re-renders the component and runs the slow expensiveCalulation() function 
      again, making the app slow and laggy.
    - WITH useMemo: Clicking the "Increment" button still re-renders the component, 
      but React skips running expensiveCalulation() because 'input' has not changed. 
      It returns the saved result instantly.
  */

  function expensiveCalulation(input) {
    for (let i = 0; i < 1000000000; i++) { }
    return input * 2;
  }

  function handleClick() {
    setCount(count + 1)
  }

  console.time('filter array');
  // const res = expensiveCalulation(input); // without useMemo
  const res = useMemo(() => expensiveCalulation(input), [input]); // with useMemo
  console.timeEnd('filter array');

  return (
    <>
      <div>
        <div>
          <h2>Hello Great Developer!! You are the God</h2>
        </div>
        <div>
          <input type="text" onChange={(e) => setInput(e.target.value)} value={input} />
          <p>Result: {res}</p>
        </div>
        <div>
          <p>Count: {count}</p>
          <button onClick={handleClick}>Increment</button>
        </div>
      </div>
    </>
  )
}

export default App
