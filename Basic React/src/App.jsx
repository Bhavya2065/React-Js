import 'bootstrap/dist/css/bootstrap.min.css';
import Login, { Profile, Setting, name } from "./login"
import { State } from "./state"
import { Toggle } from "./toggle"
import { CheckNum } from "./odd_even"
import Dynamic_propes, { Static_propes, Object_propes, WithoutDestructuring, Default_Prop, Name } from "./propes"
import { useState } from "react"
import Wrapper from "./Wrapper"
import GetInput from "./GetInput"
import CheckBox from "./checkBox"
import RadioDropdown from "./radio_dropdown"
import MapItem from "./mapItem"
import ConditionalRendering from "./ConditionalRendering"
import Practise from "./practise"
import TextVariation from "./TextVariation"
import RedBox, { BlueBox } from "./Color"
import Card from "./Card"
import FoodItems from "./FoodItems"
import Container from './Container';

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
  const foodItem = ["vegetables", "fruits", "Salad", "Milk", "Ghee"]
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
      {/* <Object_propes user={objStudent1} />   */}
      {/* <WithoutDestructuring name="Samir" age="20"/> */}
      {/* <Default_Prop name="Aniket"/>
      <Default_Prop name=""/>
      <Default_Prop /> */}
      {/* <Name name={student}/>
      <button onClick={() => setStudent("Kavya")}>Update Name of Student</button> */}


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


      {/* <MapItem></MapItem> */}
      {/* <ConditionalRendering></ConditionalRendering> */}
      {/* <Practise></Practise> */}
      {/* <TextVariation></TextVariation> */}


      {/* <RedBox />
      <BlueBox /> */}
      {/* <Card /> */}
      {/* <FoodItems foodItems={foodItem}/> */}

        
      {/* <Container data="Secure Data">
        <h1>Hello</h1>
        <p>This is inside container</p>
      </Container>
      <Container children="above is the list of healthy foods and it is good for health." /> */}
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