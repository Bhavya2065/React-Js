import Login, { Profile, Setting, name } from "./login"
import { State } from "./state"
import { Counter } from "./counter"
import { Toggle } from "./toggle"
import { CheckNum } from "./odd_even"
import { Static_propes } from "./propes"
import Dynamic_propes from "./propes"
import { Object_propes } from "./propes"
import { Name } from "./propes"
import { useState } from "react"
import { Default_Prop, Wrapper } from "./defaultprop"
import GetInput from "./take_input"
import CheckBox from "./checkBox"
import RadioDropdown from "./radio_dropdown"
import Hello from "./Hello"
import MapItem from "./mapItem"
import ConditionalRendering from "./ConditionalRendering"

let objStudent = {
  name: "Bhvya",
  email: "sjsbkvb@gmail.com"
}
let objStudent1 = {
  name: "Sanjiv",
  email: "bjvbvb@gmail.com"
}


function App() {
  let username = "Bhavya"
  let age = 21
  let [student, setStudent] = useState()
  return (
    <>
      {/* <h1>Hello</h1>
      <h1>{sum()}</h1>
      <Animals />
      <Login />
      <Profile />
      <Setting />
      <h1>{name}</h1>
      <Sum />
      <Curly /> */}
      {/* <State /> */}
      {/* <Counter /> */}
      {/* <Toggle /> */}
      {/* <CheckNum /> */}
      {/* <Static_propes data={25} /> */}
      {/* <Dynamic_propes name={username} age={age} /> */}
      {/* <Object_propes user={objStudent} /> */}
      {/* <Object_propes user={objStudent1} /> */}
      {/* <ArrayObj_propes /> */}
      {/* <Name name={student}/> */}
      {/* <button onClick={() => setStudent("Kavya")}>Update Name of Student</button> */}
      {/* <Default_Prop name="Aniket"/>
      <Default_Prop name=""/>
      <Default_Prop /> */}
      {/* <Wrapper color="blue"> 
        <h1>What is your Name</h1> 
      </Wrapper>
      <Wrapper>
        <h1>Hello Everyone</h1>
      </Wrapper>
      <Wrapper color="">
        <h1>How Are you</h1>
      </Wrapper> */}
      {/* <GetInput /> */}
      {/* <CheckBox /> */}
      {/* <RadioDropdown /> */}
      {/* <Hello></Hello>
      <Hello></Hello>
      <Hello></Hello>
      <Hello></Hello> */}
      {/* <MapItem></MapItem> */}
      <ConditionalRendering></ConditionalRendering>
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