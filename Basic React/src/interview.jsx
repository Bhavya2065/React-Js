// Interview Questions:

// 1) Why we use capital A in App(){}?
// Answer : If we use 'a' instead of 'A' then the machine can not identify whether it is the any html tag or any component of react, That's why we are using A'' instead of 'a'

// 2) What is the Difference between dependency and devdependency?
// Answer: In dependency, the project version is defiened and in devdependency(developerdependency) the Versions are defined which is used to develop Something in React?

// Note: Error cause -> You can't set two <h1> tags.

// function App(){
//   return (
//      <h1>First Component</h1>
//      <h1>second Component</h1>
//   )
// }

// solutin:

// function App() {
//   return (
//     <>
//       <h1>Hello</h1>
//       <h1>Hello, React</h1>
//     </>
//   )
// }

// 3) What is Component?
// Answer: In React, a component is a fundamental building block of the user interface (UI).

// Note: Component first letter must be capital
// Note: the one file have only one default Export.

// 4) What is JSX?
// Answer: JSX means the javascript but it is enhanced js, We can use the html in the js.

// 5) How to write alert statement in jSX?
// Answer: <button onClick={alert("Hello")}>Click</button> -> Wrong method
//         <button onClick={() => alert("Hello")}>Click</button> -> right method

// because the curly braces {} in JSX tell JavaScript to immediately execute whatever is inside them.

// 6)
// Example:

// function Sum() {
//   function call(){
//     alert("Function Called!!");
//   }
//   return (
//     <div>
//       <button onClick={call()}>Click to call</button> // This will gives the error because the in react the onClick method accepts the defination of function call, not calling (It calling that Function automatically)
//     </div>
//   )
// }

// correct Code:

// function Sum() {
//   function call(){
//     alert("Function Called!!");
//   }
//   return (
//     <div>
//       <button onClick={call}>Click to call</button> // Remove () from call() -> call
//     </div>
//   )

// 7) function calling on global level and local level
// Example:

// function call(){
//     alert("Function Called!!");
// }
// function Sum() {
//   function call(){
//     alert("Function Called!!");
//   }
//   return (
//     <div>
//       <button onClick={call}>Click to call</button> // Remove () from call() -> call
//     </div>
//   )

// In this code We have call() two times one at globle and one at local, So..
// which call() run first => local
// if we comment local call() function, then gloabal were execute or not => gloabal call() is excuted because of scope precedence.

// 8) What is State in React?
// Anser: State is a conatiner which stores the data but with render the page

// %%%%%%% Example %%%%%%%%

// The Light Switch Analogy 💡
// Think of a simple light switch on a wall.
// The Component: The light switch itself.
// The State: The switch's current position, either "on" or "off". This is the single piece of data the switch needs to remember.
// The UI: The physical appearance of the switch (flipped up or down) and the light bulb being on or off.
// When you flip the switch (a user event), you change its internal state from "off" to "on". React detects this change and automatically "re-renders" the component—updating the UI to show the switch in the new position and turning the light bulb on.

// Note: We have to import the state When we want to use it
// Note: It re-renders the component automatically so that the changed value is visible on UI.

// 9) What is the difference between state and variable in react?
// Answer: The state and variable in react Both are containers Use to store the data But the different is that when we changed the variable Then the UI Is not Render Whenever When we use state the UI is re-rendered so that the updated value is visible.

// 9) What is hook
// Answer: In React, Hooks are special functions that let you use state and other React features inside function components.

// 10) How to identify the hook?
// Answer: 

// Example: import { useState } from "react" 
// In this the 'useState' is the hook, Whenever inside {}, the word starting from the "use" it calls hooks.

// hooks uses the different react features Of the components like 
// - State
// - Lifecycle methods,
// - Side effects etc.

// Note: Syntax of State:

// const [state, setState] = useState(initialState)

// here When the setState is called then the UI is re-render.

// export function Counter() {
//     const [count, setCount] = useState(50)
//     const Increment_count = () => {
//         setCount(previousCount => previousCount + 1)
//         setCount(previousCount => previousCount + 1)
//         setCount(previousCount => previousCount + 1)
//         setCount(previousCount => previousCount + 1)
//     }
//     return(
//         <>
//             <h1>Count: {count}</h1>
//             <button onClick={Increment_count}>Increment</button>
//         </>
//     )
// }
