import Login, { Profile, Setting, name } from "./login"
import { State } from "./state"
import { Counter } from "./counter"
import { Toggle } from "./toggle"
import { CheckNum } from "./odd_even"

function App() {
  return (
    <>
      <h1>Hello</h1>
      <h1>{sum()}</h1>
      <Animals />
      <Login />
      <Profile />
      <Setting />
      <h1>{name}</h1>
      <Sum />
      <Curly />
      <State />
      <Counter />
      <Toggle />
      <CheckNum />
    </>
  )
}

// Component
function Animals() {
  return (
    <>
      <h1>CAT</h1>
      <h1>DOG</h1>
      <h1>ELE</h1>
    </>
  )
}

// Js function
function sum() {
  return 10 + 10
}

function call() {
  alert("Function Called!!");
}

// Example of JSX -> HTML in javascript
function Sum() {
  const val = 20
  let name = 'Vassi'
  function operation(a, b, op) {
    if (op == "+") {
      return a + b
    } else if (op == "-") {
      return a - b
    } else {
      // console.log("Invalid"); // It prints in console in inspect
      return "Invalid"
    }
  }
  function call() {
    alert("Function Called!!");
  }
  return (  
    <div>
      <h1>{val}</h1>
      <h1>{name}</h1>
      <h1>{operation(20, 20, '+')}</h1>
      <h1>{operation(20, 20)}</h1>
      <button onClick={() => alert("Hello")}>Click</button>
      <button onClick={call}>Click to call</button>
    </div>
  )
}

function Curly() {
  let arr = ["apple", "banana", "mango"]
  return (
    <div>
      <h1>{arr}</h1>
    </div>
  )
}

export default App