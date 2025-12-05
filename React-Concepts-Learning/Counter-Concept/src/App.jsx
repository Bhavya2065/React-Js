import Counter, { CounterMethod1, CounterMethod2, CounterWrongMethod } from "./Counter"

function App() {

  return (
    <>
      {/* All Counter Methods */}
      <hr />
      <h2>Counter Methods Demo:</h2>
      <CounterMethod1 />
      <hr />
      <CounterMethod2 />
      <hr />
      <CounterWrongMethod />
      <hr />
      <Counter />
      <hr />
    </>
  )
}

export default App
