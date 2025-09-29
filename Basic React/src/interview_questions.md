# 🚀 React Interview Questions & Answers

A comprehensive guide to React interview questions with practical examples and detailed explanations.

## Table of Contents

1. [Component Naming Convention](#1-component-naming-convention)
2. [Dependencies vs DevDependencies](#2-dependencies-vs-devdependencies)
3. [React Fragments](#3-react-fragments)
4. [React Components](#4-react-components)
5. [JSX (JavaScript XML)](#5-jsx-javascript-xml)
6. [Event Handling in JSX](#6-event-handling-in-jsx)
7. [Function Scope in React](#7-function-scope-in-react)
8. [React State](#8-react-state)
9. [State vs Variables](#9-state-vs-variables)
10. [React Hooks](#10-react-hooks)
11. [Identifying Hooks](#11-identifying-hooks)
12. [useState Hook](#12-usestate-hook)
13. [useEffect Hook](#13-useeffect-hook)
14. [Additional Topics to Study](#additional-topics-to-study)

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
