import { useMemo, useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0)
  const [input, setInput] = useState(0)

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
