React Interview Questions and Answers
1) Why do we use a capital letter for App() in React?
Answer: In React, component names must start with a capital letter to distinguish them from HTML tags. If we use a lowercase app, React would interpret it as an HTML element rather than a custom component, leading to rendering issues.
2) What is the difference between dependencies and devDependencies in a React project?
Answer: 

Dependencies: These are libraries or packages required for the application to run in production. They are included in the final build (e.g., React, Axios).
devDependencies: These are packages used only during development, such as testing frameworks (e.g., Jest) or build tools (e.g., Webpack, Babel). They are not included in the production build.

3) What is a Component in React?
Answer: A component in React is a reusable building block of the user interface (UI). It can be a function or class that returns JSX to define how a part of the UI should look and behave.
Notes:

Component names must start with a capital letter.
A single file can have only one default export.

4) What is JSX?
Answer: JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. It makes React code more readable by combining UI structure with logic.
5) How do you write an alert in JSX?
Answer: 

Incorrect: <button onClick={alert("Hello")}>Click</button>This immediately executes the alert when the component renders because {} evaluates the expression instantly.
Correct: <button onClick={() => alert("Hello")}>Click</button>Using an arrow function ensures the alert is only triggered when the button is clicked.

6) Why does <button onClick={call()} /> cause an error in React?
Answer: In React, the onClick prop expects a function reference, not a function call. Writing onClick={call()} immediately invokes the function during rendering, causing unintended behavior or errors.
Example (Incorrect):
function Sum() {
  function call() {
    alert("Function Called!!");
  }
  return (
    <div>
      <button onClick={call()}>Click to call</button> {/* Error: call() runs on render */}
    </div>
  );
}

Correct Code:
function Sum() {
  function call() {
    alert("Function Called!!");
  }
  return (
    <div>
      <button onClick={call}>Click to call</button> {/* Pass function reference */}
    </div>
  );
}

7) Function calling at global vs. local level
Answer: When a function is defined both globally and locally, the local function takes precedence due to JavaScript's scope rules. If the local function is removed (e.g., commented out), the global function will be used.
Example:
function call() {
  alert("Global Function Called!!");
}

function Sum() {
  function call() {
    alert("Local Function Called!!");
  }
  return (
    <div>
      <button onClick={call}>Click to call</button> {/* Calls local call() */}
    </div>
  );
}


If the local call function is commented out, the global call function will be executed.

8) What is State in React?
Answer: State is a built-in React object used to store dynamic data in a component. When the state changes, React automatically re-renders the component to reflect the updated data in the UI.
The Light Switch Analogy 💡:

Component: The light switch.
State: The switch's position ("on" or "off").
UI: The switch's appearance and the light bulb's state.
When the switch is flipped (user event), the state changes, and React updates the UI (e.g., turns the bulb on).

Notes:

Import useState from React to use state.
State changes trigger automatic re-rendering.

9) What is the difference between state and variables in React?
Answer: 

Variables: Store data but do not trigger a re-render when changed.
State: Stores data and triggers a re-render when updated, ensuring the UI reflects the new value.

10) What is a Hook in React?
Answer: Hooks are special functions in React that allow functional components to use features like state, lifecycle methods, and side effects. They were introduced in React 16.8 to simplify state management and logic reuse.
11) How do you identify a Hook?
Answer: Hooks are functions imported from the react package, starting with the word use (e.g., useState, useEffect). They enable features like:

State management (useState).
Side effects (useEffect).
Lifecycle methods in functional components.

Example:
import { useState } from "react";

const [state, setState] = useState(initialState); // useState is a Hook

Note: When setState is called, it updates the state and triggers a re-render.
12) Why can't you have multiple <h1> tags directly in a return statement?
Answer: In React, a component's return statement must return a single element (the "single parent rule"). Multiple <h1> tags cause an error because they are not wrapped in a single parent element.
Incorrect:
function App() {
  return (
    <h1>First Component</h1>
    <h1>Second Component</h1> {/* Error: Multiple elements without a parent */}
  );
}

Correct:
function App() {
  return (
    <>
      <h1>Hello</h1>
      <h1>Hello, React</h1> {/* Wrapped in a Fragment */}
    </>
  );
}


A React Fragment (<>...</>) is used to wrap multiple elements without adding extra nodes to the DOM.

Additional Questions (Suggested for a Comprehensive Interview)
13) What is the purpose of key in a React list?
Answer: The key prop is used in React lists to uniquely identify elements. It helps React efficiently update and re-render lists by tracking which items have changed, been added, or removed.
Example:
function List() {
  const items = ["Apple", "Banana", "Orange"];
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}


Use unique and stable IDs (not array indices) whenever possible for better performance.

14) What is the difference between useState and useReducer?
Answer:

useState: Manages simple state values. Ideal for independent pieces of state (e.g., a counter).
useReducer: Manages complex state logic with multiple related values or when state transitions depend on actions. It uses a reducer function to update state based on dispatched actions.

Example (useState):
const [count, setCount] = useState(0);

Example (useReducer):
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    default:
      return state;
  }
};
const [state, dispatch] = useReducer(reducer, { count: 0 });

15) What are Props in React?
Answer: Props (short for properties) are read-only inputs passed to a React component to customize its behavior or output. They allow components to be reusable and dynamic.
Example:
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  return <Greeting name="Alice" />;
}

If you have more specific questions or additional topics to include, please let me know, and I can expand this further!