import Dynamic_propes, { Static_propes, Object_propes, WithoutDestructuring, Default_Prop, Name } from "./propes"
import { useState } from "react"

let username = "Bhavya"
let age = 21

let objStudent = {
  name: "Bhvya",
  email: "sjsbkvb@gmail.com"
}
let objStudent1 = {
  name: "Sanjiv",
  email: "bjvbvb@gmail.com"
}

function App() {
  let [student, setStudent] = useState(null) // We can't define the hook outside a main(App()) component.
  return (
    <>
      <Static_propes data={25} />
      <Dynamic_propes name={username} age={age} />
      <Object_propes user={objStudent} />
      <Object_propes user={objStudent1} />
      <WithoutDestructuring name="Samir" age="20" />
      <Default_Prop name="Aniket" />
      <Default_Prop name="" />
      <Default_Prop />
      <Name name={student} />
      <button onClick={() => setStudent("Kavya")}>Update Name of Student</button>
    </>
  )
}

export default App
