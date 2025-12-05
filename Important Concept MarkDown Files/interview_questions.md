# 🚀 React Interview Questions & Answers

A comprehensive guide to React interview questions with practical examples and detailed explanations.

## Table of Contents

- [🚀 React Interview Questions \& Answers](#-react-interview-questions--answers)
  - [Table of Contents](#table-of-contents)
  - [1. Component Naming Convention](#1-component-naming-convention)
    - [Example:](#example)
  - [2. Dependencies vs DevDependencies](#2-dependencies-vs-devdependencies)
    - [Example package.json:](#example-packagejson)
  - [3. React Fragments](#3-react-fragments)
    - [❌ This will cause an error:](#-this-will-cause-an-error)
    - [✅ Solutions:](#-solutions)
  - [4. React Components](#4-react-components)
    - [Types of components:](#types-of-components)
    - [Important Notes:](#important-notes)
  - [5. JSX (JavaScript XML)](#5-jsx-javascript-xml)
    - [Example:](#example-1)
  - [6. Event Handling in JSX](#6-event-handling-in-jsx)
    - [❌ Wrong - This executes immediately:](#-wrong---this-executes-immediately)
    - [✅ Correct approaches:](#-correct-approaches)
  - [7. Function Scope in React](#7-function-scope-in-react)
    - [Example:](#example-2)
  - [8. React State](#8-react-state)
    - [💡 The Light Switch Analogy:](#-the-light-switch-analogy)
    - [Example:](#example-3)
    - [More Complex State Example:](#more-complex-state-example)
  - [9. State vs Variables](#9-state-vs-variables)
    - [Example:](#example-4)
  - [10. React Hooks](#10-react-hooks)
    - [Common React Hooks:](#common-react-hooks)
    - [Hook Rules:](#hook-rules)
  - [11. Identifying Hooks](#11-identifying-hooks)
    - [Examples of hooks:](#examples-of-hooks)
    - [Custom Hook Example:](#custom-hook-example)
  - [12. useState Hook](#12-usestate-hook)
    - [Syntax:](#syntax)
    - [Examples with Different Data Types:](#examples-with-different-data-types)
  - [13. useEffect Hook](#13-useeffect-hook)
    - [Examples:](#examples)
    - [useEffect Patterns:](#useeffect-patterns)
  - [Complete Interactive App Example](#complete-interactive-app-example)
  - [14. Props and Props Drilling](#14-props-and-props-drilling)
    - [Example:](#example-5)
    - [Problem Example:](#problem-example)
    - [Solutions:](#solutions)
  - [15. React Keys in Lists](#15-react-keys-in-lists)
    - [✅ Correct Usage:](#-correct-usage)
    - [❌ Incorrect Usage:](#-incorrect-usage)
    - [Why Index Keys are Bad:](#why-index-keys-are-bad)
  - [16. Children in React](#16-children-in-react)
    - [Example:](#example-6)
    - [Key Differences:](#key-differences)
    - [Benefits of Children:](#benefits-of-children)
  - [17. Controlled vs Uncontrolled Components](#17-controlled-vs-uncontrolled-components)
    - [When to Use:](#when-to-use)
  - [18. React Conditional Rendering](#18-react-conditional-rendering)
    - [Method 1: Using if/else (Outside JSX)](#method-1-using-ifelse-outside-jsx)
    - [Method 2: Ternary Operator](#method-2-ternary-operator)
    - [Method 3: Logical AND (\&\&)](#method-3-logical-and-)
    - [Method 4: Switch Statement](#method-4-switch-statement)
  - [19. Component Lifecycle (Hooks Equivalent)](#19-component-lifecycle-hooks-equivalent)
    - [Class Component Lifecycle:](#class-component-lifecycle)
    - [Equivalent with Hooks:](#equivalent-with-hooks)
  - [20. React.memo and Performance Optimization](#20-reactmemo-and-performance-optimization)
    - [Example:](#example-7)
    - [useCallback Hook (Related):](#usecallback-hook-related)
  - [21. State Batching and setState](#21-state-batching-and-setstate)
    - [Example:](#example-8)
    - [Why Multiple Updates Result in One Change:](#why-multiple-updates-result-in-one-change)
  - [22. Virtual DOM and Reconciliation](#22-virtual-dom-and-reconciliation)
    - [How it works:](#how-it-works)
    - [Example of Reconciliation:](#example-of-reconciliation)
    - [Key Points:](#key-points)
  - [23. Custom Hooks](#23-custom-hooks)
    - [Creating a Custom Hook:](#creating-a-custom-hook)
    - [Benefits of Custom Hooks:](#benefits-of-custom-hooks)
  - [24. Form Handling in React](#24-form-handling-in-react)
    - [Complete Form Example:](#complete-form-example)
  - [25. Error Handling with Error Boundaries](#25-error-handling-with-error-boundaries)
    - [Creating an Error Boundary:](#creating-an-error-boundary)
    - [What Error Boundaries Catch:](#what-error-boundaries-catch)
    - [What They Don't Catch:](#what-they-dont-catch)
  - [26. React Router Basics](#26-react-router-basics)
    - [Basic Setup:](#basic-setup)
    - [Navigation:](#navigation)
  - [Additional Topics to Study](#additional-topics-to-study)
  - [Best Practices](#best-practices)
    - [✅ Do:](#-do)
    - [❌ Don't:](#-dont)
  - [Interview Tips](#interview-tips)

--- 

## 1. Component Naming Convention

**Q: Why do we use a capital letter in component names like `App()`?**

**Answer:** React uses PascalCase for component names to distinguish between:
- **HTML elements** (lowercase): `<div>`, `<h1>`, `<button>`
- **React components** (PascalCase): `<App>`, `<Header>`, `<UserProfile>`

If we use lowercase, React treats it as a DOM element, not a component.

### Example:

```jsx
// ✅ Valid React component
function MyComponent() {
  return <h1>This is a valid React component</h1>;
}

// ❌ Invalid - React won't recognize this as a component
function mycomponent() {
  return <h1>This won't work as expected</h1>;
}
```

---

## 2. Dependencies vs DevDependencies

**Q: What is the difference between dependencies and devDependencies?**

**Answer:**
- **dependencies**: Packages required for the app to run in production
  - Examples: `react`, `react-dom`, `axios`, `lodash`
- **devDependencies**: Packages only needed during development/build process
  - Examples: `webpack`, `babel`, `eslint`, `jest`, `@types` packages

### Example package.json:

```json
{
  "dependencies": {
    "react": "^18.0.0",        // Needed in production
    "axios": "^1.0.0"         // Needed in production
  },
  "devDependencies": {
    "webpack": "^5.0.0",      // Only needed for building
    "eslint": "^8.0.0"       // Only needed for development
  }
}
```

---

## 3. React Fragments

**Q: What are React Fragments and why do we need them?**

**Answer:** React components can only return a single parent element. Fragments let you group multiple elements without adding extra DOM nodes.

### ❌ This will cause an error:

```jsx
function ErrorComponent() {
  return (
    <h1>First heading</h1>
    <h1>Second heading</h1>  // Error: Adjacent JSX elements must be wrapped
  );
}
```

### ✅ Solutions:

```jsx
// Short syntax
function FragmentExample() {
  return (
    <>
      <h1>First heading</h1>
      <h1>Second heading</h1>
    </>
  );
}

// Alternative syntax
function FragmentExampleLong() {
  return (
    <React.Fragment>
      <h1>First heading</h1>
      <h1>Second heading</h1>
    </React.Fragment>
  );
}
```

---

## 4. React Components

**Q: What is a React Component?**

**Answer:** A component is a reusable piece of UI that accepts inputs (props) and returns React elements describing what should appear on screen.

### Types of components:

```jsx
// 1. Function Components (modern approach)
function WelcomeFunction(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// 2. Arrow Function Components
const WelcomeArrow = (props) => {
  return <h1>Hello, {props.name}!</h1>;
};

// 3. Class Components (legacy approach)
class WelcomeClass extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}
```

### Important Notes:
- Component names MUST start with a capital letter
- Each file should have only one default export
- Components should be pure functions when possible

---

## 5. JSX (JavaScript XML)

**Q: What is JSX?**

**Answer:** JSX is a syntax extension for JavaScript that allows you to write HTML-like code inside JavaScript. It makes React code more readable.

JSX gets transpiled to `React.createElement()` calls:
- **JSX:** `<h1>Hello World</h1>`
- **Becomes:** `React.createElement('h1', null, 'Hello World')`

### Example:

```jsx
function JSXExample() {
  const name = 'React';
  const isLoggedIn = true;
  
  return (
    <div className="container"> {/* className instead of class */}
      <h1>Hello, {name}!</h1> {/* JavaScript expressions in {} */}
      {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in</p>} {/* Conditional rendering */}
      <button onClick={() => console.log('Clicked!')}>Click me</button>
    </div>
  );
}
```

---

## 6. Event Handling in JSX

**Q: How to handle events in JSX?**

**Answer:** Event handlers in JSX receive function references, not function calls.

### ❌ Wrong - This executes immediately:
```jsx
<button onClick={alert("Hello")}>Click</button>
```

### ✅ Correct approaches:

```jsx
function EventHandlingExample() {
  // Method 1: Arrow function
  const handleClick1 = () => {
    alert('Button clicked!');
  };
  
  // Method 2: Regular function
  function handleClick2() {
    console.log('Button 2 clicked!');
  }
  
  return (
    <div>
      <button onClick={() => alert('Inline handler')}>Method 1: Inline</button>
      <button onClick={handleClick1}>Method 2: Arrow function</button>
      <button onClick={handleClick2}>Method 3: Regular function</button>
      <button onClick={() => handleClick2()}>Method 4: Call with parameters</button>
    </div>
  );
}
```

---

## 7. Function Scope in React

**Q: How does function scope work in React components?**

**Answer:** Local functions take precedence over global functions due to JavaScript's lexical scoping rules.

### Example:

```jsx
// Global function
function globalAlert() {
  alert('Global function called!');
}

function ScopeExample() {
  // Local function (takes precedence)
  function globalAlert() {
    alert('Local function called!');
  }
  
  return (
    <div>
      <button onClick={globalAlert}>Click me</button> {/* Calls local function */}
    </div>
  );
}
```

If we remove the local function, the global one will be called.

---

## 8. React State

**Q: What is State in React?**

**Answer:** State is a JavaScript object that stores component data that can change over time. When state changes, React automatically re-renders the component.

### 💡 The Light Switch Analogy:
- **Component:** The light switch itself
- **State:** The switch's current position ("on" or "off")
- **UI:** The visual appearance and light bulb status
- **Event:** When you flip the switch, state changes, and UI updates automatically

### Example:

```jsx
import React, { useState } from 'react';

function LightSwitch() {
  const [isOn, setIsOn] = useState(false); // State: boolean value
  
  return (
    <div>
      <h2>Light is {isOn ? '💡 ON' : '🌙 OFF'}</h2>
      <button onClick={() => setIsOn(!isOn)}>
        {isOn ? 'Turn Off' : 'Turn On'}
      </button>
    </div>
  );
}
```

### More Complex State Example:

```jsx
function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
```

---

## 9. State vs Variables

**Q: What's the difference between state and regular variables in React?**

**Answer:**
- **Regular variables:** Changes don't trigger re-renders, UI won't update
- **State:** Changes trigger re-renders, UI updates automatically

### Example:

```jsx
function StateVsVariable() {
  let regularVariable = 0;           // ❌ Won't cause re-render
  const [stateVariable, setStateVariable] = useState(0); // ✅ Will cause re-render
  
  return (
    <div>
      <h3>Regular Variable: {regularVariable}</h3>
      <button onClick={() => {
        regularVariable++; // This changes the variable but UI won't update
        console.log('Regular variable:', regularVariable);
      }}>
        Change Regular Variable (won't update UI)
      </button>
      
      <h3>State Variable: {stateVariable}</h3>
      <button onClick={() => setStateVariable(stateVariable + 1)}>
        Change State Variable (will update UI)
      </button>
    </div>
  );
}
```

---

## 10. React Hooks

**Q: What are React Hooks?**

**Answer:** Hooks are special functions that let you "hook into" React features from function components. They start with "use" and follow specific rules.

### Common React Hooks:
- **useState:** Manage component state
- **useEffect:** Handle side effects (API calls, subscriptions, etc.)
- **useContext:** Access React context
- **useReducer:** Manage complex state logic
- **useMemo:** Optimize expensive calculations
- **useCallback:** Optimize function references

### Hook Rules:
1. Only call hooks at the top level (not inside loops, conditions, or nested functions)
2. Hooks can only be called inside of the body of a function component.

---

## 11. Identifying Hooks

**Q: How to identify hooks?**

**Answer:** Hooks always start with "use" followed by a capital letter.

### Examples of hooks:

```jsx
import { 
  useState,    // ✅ Hook
  useEffect,   // ✅ Hook  
  useContext,  // ✅ Hook
  useMemo      // ✅ Hook
} from 'react';
```

### Custom Hook Example:

```jsx
// ✅ Custom hook (starts with 'use')
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialValue);
  
  return { count, increment, decrement, reset };
}

// Using custom hook:
function CustomHookExample() {
  const { count, increment, decrement, reset } = useCounter(10);
  
  return (
    <div>
      <h2>Custom Hook Counter: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
```

---

## 12. useState Hook

**Q: What is the useState hook and how do you use it?**

**Answer:** useState is a hook that lets you add state to function components.

### Syntax:
```jsx
const [state, setState] = useState(initialValue)
```
- **state:** Current state value
- **setState:** Function to update state
- **initialValue:** Starting value for state

### Examples with Different Data Types:

```jsx
function UseStateExamples() {
  // Different types of state:
  const [text, setText] = useState('');                    // String
  const [number, setNumber] = useState(0);                // Number  
  const [isVisible, setIsVisible] = useState(true);       // Boolean
  const [items, setItems] = useState([]);                 // Array
  const [user, setUser] = useState({ name: '', age: 0 }); // Object
  
  // Updating state:
  const addItem = () => {
    setItems([...items, `Item ${items.length + 1}`]); // Spread operator for arrays
  };
  
  const updateUser = () => {
    setUser({ ...user, name: 'John Doe' }); // Spread operator for objects
  };
  
  return (
    <div>
      <input 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Type something..."
      />
      <p>You typed: {text}</p>
      
      <button onClick={() => setNumber(number + 1)}>Count: {number}</button>
      
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide' : 'Show'} Content
      </button>
      {isVisible && <p>This content can be toggled!</p>}
      
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
      
      <button onClick={updateUser}>Set User Name</button>
      <p>User: {user.name || 'No name set'}</p>
    </div>
  );
}
```

---

## 13. useEffect Hook

**Q: What is the useEffect hook and when do you use it?**

**Answer:** useEffect lets you perform side effects in function components (data fetching, subscriptions, DOM manipulation, etc.)

### Examples:

```jsx
import React, { useState, useEffect } from 'react';

function UseEffectExample() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);
  
  // Effect that runs after every render
  useEffect(() => {
    document.title = `Count: ${count}`;
  });
  
  // Effect that runs only once (componentDidMount equivalent)
  useEffect(() => {
    console.log('Component mounted!');
    // Simulate API call
    setTimeout(() => {
      setData('Data loaded from API');
    }, 1000);
  }, []); // Empty dependency array = run once
  
  // Effect with dependencies (runs when count changes)
  useEffect(() => {
    if (count > 5) {
      console.log('Count is greater than 5!');
    }
  }, [count]); // Runs when 'count' changes
  
  // Effect with cleanup (componentWillUnmount equivalent)
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('Timer tick');
    }, 1000);
    
    // Cleanup function
    return () => {
      clearInterval(timer);
      console.log('Timer cleared');
    };
  }, []);
  
  return (
    <div>
      <h2>useEffect Example</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Data: {data || 'Loading...'}</p>
    </div>
  );
}
```

### useEffect Patterns:

| Pattern | Dependency Array | When it runs |
|---------|------------------|--------------|
| `useEffect(() => {})` | No array | After every render |
| `useEffect(() => {}, [])` | Empty array | Once after mount |
| `useEffect(() => {}, [value])` | With dependencies | When dependencies change |
| `useEffect(() => { return cleanup; })` | With cleanup | Cleanup on unmount/re-run |

---

## Complete Interactive App Example

```jsx
import React, { useState, useEffect } from 'react';

function App() {
  const [currentExample, setCurrentExample] = useState('counter');
  
  const examples = {
    counter: <Counter />,
    lightSwitch: <LightSwitch />,
    stateVsVariable: <StateVsVariable />,
    customHook: <CustomHookExample />,
    useState: <UseStateExamples />,
    useEffect: <UseEffectExample />,
    events: <EventHandlingExample />,
    jsx: <JSXExample />,
    fragments: <FragmentExample />
  };
  
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>🚀 React Interview Questions - Interactive Examples</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <label>Choose an example: </label>
        <select 
          value={currentExample} 
          onChange={(e) => setCurrentExample(e.target.value)}
          style={{ padding: '5px', marginLeft: '10px' }}
        >
          <option value="counter">Counter (useState)</option>
          <option value="lightSwitch">Light Switch (State analogy)</option>
          <option value="stateVsVariable">State vs Variable</option>
          <option value="customHook">Custom Hook</option>
          <option value="useState">useState Examples</option>
          <option value="useEffect">useEffect Example</option>
          <option value="events">Event Handling</option>
          <option value="jsx">JSX Example</option>
          <option value="fragments">React Fragments</option>
        </select>
      </div>
      
      <div style={{ 
        border: '2px solid #007acc', 
        borderRadius: '8px', 
        padding: '20px', 
        backgroundColor: '#f8f9fa' 
      }}>
        {examples[currentExample]}
      </div>
      
      <div style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
        💡 <strong>Tip:</strong> Open browser developer tools to see console logs and interact with examples!
      </div>
    </div>
  );
}

export default App;
```

---

## 14. Props and Props Drilling

**Q: What are Props and how do they work?**

**Answer:** Props (properties) are how you pass data from parent components to child components. They are read-only and help make components reusable.

### Example:

```jsx
// Parent Component
function App() {
  return <Greeting name="Bhavya" age={21} />;
}

// Child Component
function Greeting({ name, age }) {
  return <h1>Hello {name}, you are {age} years old!</h1>;
}
```

**Q: What is Props Drilling?**

**Answer:** Props drilling (or prop threading) is when you pass props through multiple levels of components even if intermediate components don't use them.

### Problem Example:

```jsx
// ❌ Props drilling problem
function App() {
  const user = { name: 'Bhavya', role: 'Admin' };
  return <Header user={user} />;
}

function Header({ user }) {
  return <Navbar user={user} />;  // Doesn't use user
}

function Navbar({ user }) {
  return <Profile user={user} />; // Doesn't use user
}

function Profile({ user }) {
  return <h1>{user.name} - {user.role}</h1>; // Finally uses it
}
```

### Solutions:

```jsx
// Solution 1: React Context API
const UserContext = React.createContext();

function App() {
  const user = { name: 'Bhavya', role: 'Admin' };
  return (
    <UserContext.Provider value={user}>
      <Header />
    </UserContext.Provider>
  );
}

function Profile() {
  const user = useContext(UserContext);
  return <h1>{user.name} - {user.role}</h1>;
}
```

---

## 15. React Keys in Lists

**Q: Why do we need keys in list rendering?**

**Answer:** Keys help React identify which items have changed, been added, or removed. They maintain component state and improve performance.

### ✅ Correct Usage:

```jsx
function UserList({ users }) {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>  // ✅ Use unique ID
      ))}
    </ul>
  );
}
```

### ❌ Incorrect Usage:

```jsx
function UserList({ users }) {
  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>{user.name}</li>  // ❌ Avoid index as key
      ))}
    </ul>
  );
}
```

### Why Index Keys are Bad:

- If list items are reordered, filtered, or deleted, index keys break
- Component state gets attached to wrong items
- Performance issues in large lists

---

## 16. Children in React

**Q: What is the children prop and how is it different from other props?**

**Answer:** `children` is a special prop that contains whatever is placed between opening and closing tags of a component.

### Example:

```jsx
// Parent Component
function Card({ children, title }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
}

// Usage
<Card title="Profile">
  <h3>John Doe</h3>
  <p>Software Developer</p>
</Card>
```

### Key Differences:

```jsx
// Regular Props - Must be explicitly passed
<Component name="Bhavya" />

// Children - Passed between tags
<Component>
  <h1>This is children</h1>
</Component>

// Combined
<Component name="Bhavya">
  <h1>This is children</h1>
</Component>
```

### Benefits of Children:

- Creates flexible, reusable wrapper components
- Promotes composition over configuration
- Reduces prop drilling
- Makes components more readable

---

## 17. Controlled vs Uncontrolled Components

**Q: What is the difference between controlled and uncontrolled components?**

**Answer:** 

**Controlled Components:** Form data is handled by React state

```jsx
function ControlledForm() {
  const [name, setName] = useState('');
  
  return (
    <form>
      <input 
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <button onClick={() => console.log(name)}>Submit</button>
    </form>
  );
}
```

**Uncontrolled Components:** Form data is handled by DOM directly

```jsx
function UncontrolledForm() {
  const inputRef = useRef();
  
  const handleSubmit = () => {
    console.log(inputRef.current.value);  // Get value from DOM
  };
  
  return (
    <form>
      <input ref={inputRef} placeholder="Enter name" />
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
}
```

### When to Use:

- **Controlled:** When you need real-time validation, auto-save, conditional rendering
- **Uncontrolled:** Simple forms, file uploads, integration with non-React code

---

## 18. React Conditional Rendering

**Q: What are the different ways to implement conditional rendering in React?**

**Answer:** Conditional rendering displays different UI based on certain conditions.

### Method 1: Using if/else (Outside JSX)

```jsx
function LoginButton() {
  const isLoggedIn = true;
  
  if (isLoggedIn) {
    return <button>Logout</button>;
  }
  return <button>Login</button>;
}
```

### Method 2: Ternary Operator

```jsx
function LoginButton() {
  const isLoggedIn = true;
  
  return (
    <button>
      {isLoggedIn ? 'Logout' : 'Login'}
    </button>
  );
}
```

### Method 3: Logical AND (&&)

```jsx
function Notification() {
  const messages = 5;
  
  return (
    <div>
      {messages > 0 && <span>You have {messages} messages</span>}
    </div>
  );
}
```

### Method 4: Switch Statement

```jsx
function Status({ status }) {
  switch(status) {
    case 'loading':
      return <p>Loading...</p>;
    case 'success':
      return <p>Success!</p>;
    case 'error':
      return <p>Error occurred</p>;
    default:
      return <p>Unknown status</p>;
  }
}
```

---

## 19. Component Lifecycle (Hooks Equivalent)

**Q: What are React component lifecycle methods and how do hooks replace them?**

**Answer:** Component lifecycle refers to the series of events that happen during a component's life.

### Class Component Lifecycle:

```jsx
class Counter extends React.Component {
  componentDidMount() {
    console.log('Component mounted');  // Runs once after render
  }

  componentDidUpdate() {
    console.log('Component updated');  // Runs after every update
  }

  componentWillUnmount() {
    console.log('Component unmounting');  // Runs before removal
  }

  render() {
    return <h1>Count: {this.state.count}</h1>;
  }
}
```

### Equivalent with Hooks:

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  // Equivalent to componentDidMount
  useEffect(() => {
    console.log('Component mounted');
  }, []);

  // Equivalent to componentDidUpdate
  useEffect(() => {
    console.log('Component updated');
  });

  // Equivalent to componentWillUnmount
  useEffect(() => {
    return () => {
      console.log('Component unmounting');
    };
  }, []);

  return <h1>Count: {count}</h1>;
}
```

---

## 20. React.memo and Performance Optimization

**Q: What is React.memo and when should you use it?**

**Answer:** React.memo is a higher-order component that memoizes a component, preventing unnecessary re-renders.

### Example:

```jsx
// Without memo - re-renders on every parent update
function UserCard({ user }) {
  console.log('UserCard rendered');
  return <h1>{user.name}</h1>;
}

// With memo - only re-renders if props change
export default React.memo(UserCard);

// Usage
function App() {
  const [count, setCount] = useState(0);
  const user = { name: 'Bhavya' };
  
  return (
    <>
      <UserCard user={user} />  // Won't re-render unless 'user' changes
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}
```

### useCallback Hook (Related):

```jsx
function Parent() {
  const [count, setCount] = useState(0);
  
  // Without useCallback - new function on every render
  // const handleClick = () => console.log(count);
  
  // With useCallback - same function reference
  const handleClick = useCallback(() => {
    console.log(count);
  }, [count]);
  
  return <Child onClick={handleClick} />;
}
```

---

## 21. State Batching and setState

**Q: How does React batch state updates?**

**Answer:** React batches multiple setState calls into a single re-render for performance.

### Example:

```jsx
function Counter() {
  const [count, setCount] = useState(0);
  
  const handleClick = () => {
    // These 3 updates are batched into ONE re-render
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    // Result: count increases by 1, not 3!
  };
  
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>Increment</button>
    </>
  );
}
```

### Why Multiple Updates Result in One Change:

```jsx
// The updates are queued:
setCount(0 + 1)  // count = 1
setCount(0 + 1)  // count = 1 (based on original state)
setCount(0 + 1)  // count = 1 (based on original state)
// Final: count = 1

// Correct way to update multiple times:
const handleClick = () => {
  setCount(prev => prev + 1);  // Queued: 0 + 1 = 1
  setCount(prev => prev + 1);  // Queued: 1 + 1 = 2
  setCount(prev => prev + 1);  // Queued: 2 + 1 = 3
  // Final: count = 3 ✅
};
```

---

## 22. Virtual DOM and Reconciliation

**Q: What is Virtual DOM and how does React use it?**

**Answer:** Virtual DOM is a lightweight representation of the real DOM in memory. React uses it to optimize updates.

### How it works:

1. When state changes, React creates a new Virtual DOM tree
2. React compares (diffs) the new Virtual DOM with the previous one
3. React updates only the changed parts in the real DOM (reconciliation)
4. This batch processing improves performance

### Example of Reconciliation:

```jsx
// Initial render:
// Real DOM: <div><h1>Count: 0</h1></div>

function Counter() {
  const [count, setCount] = useState(0);
  
  return <div><h1>Count: {count}</h1></div>;
}

// After click:
// Virtual DOM detects only text changed
// Real DOM updates: <h1>Count: 1</h1>
// Other elements remain untouched
```

### Key Points:

- ✅ Only necessary changes are applied to real DOM
- ✅ This is why keys are important in lists
- ✅ It's not slower than direct DOM manipulation in most cases
- ✅ It enables React's declarative nature

---

## 23. Custom Hooks

**Q: How do you create and use custom hooks?**

**Answer:** Custom hooks are JavaScript functions whose names start with "use" and may call other hooks.

### Creating a Custom Hook:

```jsx
// Custom hook for fetching data
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}

// Using custom hook
function UserProfile() {
  const { data: user, loading, error } = useFetch('/api/user/1');
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  
  return <h1>{user.name}</h1>;
}
```

### Benefits of Custom Hooks:

- Reuse stateful logic across components
- Cleaner component code
- Easier to test
- Share state without prop drilling

---

## 24. Form Handling in React

**Q: How to handle form submissions and validations in React?**

**Answer:** Forms in React are typically controlled components with validation logic.

### Complete Form Example:

```jsx
function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) {
      newErrors.password = 'Password must be 6+ characters';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
      // Send to server
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input 
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
        />
        {errors.name && <span>{errors.name}</span>}
      </div>
      
      <div>
        <input 
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        {errors.email && <span>{errors.email}</span>}
      </div>
      
      <div>
        <input 
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />
        {errors.password && <span>{errors.password}</span>}
      </div>
      
      <button type="submit">Register</button>
    </form>
  );
}
```

---

## 25. Error Handling with Error Boundaries

**Q: What are Error Boundaries and how do you use them?**

**Answer:** Error Boundaries are React components that catch JavaScript errors anywhere in their child component tree.

### Creating an Error Boundary:

```jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.log('Error caught:', error, errorInfo);
    // Log to error reporting service
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Oops! Something went wrong</h1>
          <p>{this.state.error?.message}</p>
        </div>
      );
    }

    return this.props.children;
  }
}

// Usage
function App() {
  return (
    <ErrorBoundary>
      <UserProfile />
      <PostList />
    </ErrorBoundary>
  );
}
```

### What Error Boundaries Catch:

- ✅ Render errors
- ✅ Lifecycle method errors
- ✅ Constructor errors

### What They Don't Catch:

- ❌ Event handler errors (use try/catch)
- ❌ Async errors (use try/catch)
- ❌ Server-side rendering errors

---

## 26. React Router Basics

**Q: How do you implement routing in React applications?**

**Answer:** React Router is the most popular library for client-side routing in React.

### Basic Setup:

```jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/:id" element={<UserDetail />} />
        <Route path="*" element={<NotFound />} />  {/* 404 */}
      </Routes>
    </BrowserRouter>
  );
}

function UserDetail() {
  const { id } = useParams();
  return <h1>User {id}</h1>;
}
```

### Navigation:

```jsx
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // After login
    navigate('/dashboard');  // Navigate to dashboard
    // Or go back
    navigate(-1);  // Go back
  };

  return <button onClick={handleLogin}>Login</button>;
}
```

---

## Additional Topics to Study

Here are more advanced React interview topics you should prepare for:

1. **Virtual DOM** - How React optimizes rendering
2. **React Keys** - Why they're important in lists
3. **Prop Drilling** - Problem and solutions (Context API, Redux)
4. **Higher-Order Components (HOCs)** - Component composition pattern
5. **React Context API** - State management without prop drilling
6. **Controlled vs Uncontrolled Components** - Form handling approaches
7. **useCallback vs useMemo** - Performance optimization hooks
8. **React.memo()** - Component memoization
9. **Error Boundaries** - Handling JavaScript errors in components
10. **Code Splitting** - Lazy loading components
11. **React Portals** - Rendering outside component hierarchy
12. **Class vs Functional Components** - Legacy vs modern approaches
13. **React Lifecycle Methods** - componentDidMount, componentWillUnmount, etc.
14. **Redux/Zustand** - State management libraries
15. **React Router** - Client-side routing

---

## Best Practices

### ✅ Do:
- Use PascalCase for component names
- Use functional components with hooks
- Keep components small and focused
- Use meaningful variable names
- Handle errors with Error Boundaries
- Use React Developer Tools for debugging

### ❌ Don't:
- Call hooks conditionally or in loops
- Mutate state directly
- Use array indices as keys in dynamic lists
- Forget to cleanup subscriptions in useEffect
- Use too many nested components (prop drilling)
- Put business logic directly in components

---

## Interview Tips

1. **Practice coding live** - Most interviews involve live coding
2. **Explain your thinking** - Talk through your approach
3. **Know the fundamentals** - Understand how React works under the hood
4. **Be familiar with debugging tools** - React DevTools, browser console
5. **Understand state management** - When to use local state vs global state
6. **Know performance optimization** - When and how to optimize React apps
7. **Stay updated** - React evolves quickly, know the latest features

---

*Happy coding! 🚀*
