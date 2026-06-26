import { useCallback, useState } from 'react'
import './App.css'
import ChildCompo from './ChildCompo'

function App() {

  const [count, setCount] = useState(0)

  let handleIncrement = useCallback(() => {
    setCount(prevCount => prevCount + 1)
  }, []) 
  // We use an empty array [] so this function is created only once.
  // We use prevCount => prevCount + 1 to avoid stale closure (locked state value).

  return (
    <>
      <div>
        <div>
          <h1>Count: {count}</h1>
          <button onClick={handleIncrement}>Increment</button>
        </div>
        <div>
          <ChildCompo btnname={"Click Me"} handleClick={handleIncrement}/>
        </div>
      </div>
    </>
  )
}

export default App

/*
  =========================================
  UNDERSTANDING useCallback (SIMPLE ENGLISH)
  =========================================

  1. WHAT PROBLEM DOES IT SOLVE?
     - In React, every time a component renders, all functions inside it are created new in memory.
     - When you pass a function to a child component (even if the child uses React.memo), the child sees a "new" function reference and re-renders.
     - This causes unnecessary re-renders of child components, which slows down the app.

  2. HOW DOES IT SOLVE IT?
     - useCallback caches (saves) the function in memory.
     - As long as the dependencies in the array [dep] do not change, React will reuse the same cached function reference.
     - Since the function reference doesn't change, the child component (using React.memo) will NOT re-render unnecessarily.

  3. HOW TO USE IT CORRECTLY:
     - If you use variables from the component (like 'count') inside useCallback, you must add them to the dependency array, OR:
     - Use a functional update (like `prevCount => prevCount + 1`) to avoid stale state issues, allowing you to keep the dependency array empty `[]`.
*/
