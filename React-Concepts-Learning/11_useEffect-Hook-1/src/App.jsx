import './App.css'
import { useState, useEffect } from 'react';

function App() {

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
    <>
      <div>
        <h2>useEffect Example</h2>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <p>Data: {data || 'Loading...'}</p>
      </div>
    </>
  )
}

export default App