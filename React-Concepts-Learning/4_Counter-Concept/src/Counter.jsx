import { useState } from "react";

/**
 * Method 1: Simple Counter using useState
 * Basic implementation of a counter with a single update button
 */
export const CounterMethod1 = () => {
    let [counter, updateCount] = useState(0)
    const count = () => {
        updateCount(counter++)
    }
    return (
        <>
            <h1>Method 1 - Count: {counter}</h1>
            <button onClick={count}>Update Count</button>
        </>
    )
}


/**
 * Method 2: Counter with Increment and Decrement Buttons
 * Two buttons to increase and decrease count
 * 
 * IMPORTANT: You must use either ++counter or counter+1, 
 * but don't use counter++ because it returns the first value and then increments.
 */
export const CounterMethod2 = () => {
    let [counter, setCount] = useState(0)
    return (
        <>
            <h1>Method 2 - Count: {counter}</h1>
            <button onClick={() => setCount(++counter)}>Increment Count</button> 
            <button onClick={() => setCount(--counter)}>Decrement Count</button> 
        </>
    )
}


/**
 * Method 3: WRONG Implementation - Common Mistake in Interview Questions
 * This demonstrates the INCORRECT way to handle multiple state updates
 * 
 * Problem: React batches updates, so all setCount calls use the same count value.
 * The counter will only increment by 1 instead of 4.
 * 
 * Why it fails:
 * - All four setCount calls are in the same event handler
 * - React batches these updates together
 * - Each setCount sees the same count value (50)
 * - Result: count becomes 51 (50 + 1), not 54
 */
export function CounterWrongMethod() {
    const [count, setCount] = useState(50)
    const Increment_count = () => {
        setCount(count + 1)
        setCount(count + 1)
        setCount(count + 1)
        setCount(count + 1)
    }
    return(
        <>
            <h1>Method 3 (WRONG) - Count: {count}</h1>
            <button onClick={Increment_count}>Increment (only adds 1, not 4)</button>
        </>
    )
}


/**
 * Method 4: CORRECT Implementation - Using Callback Function
 * This demonstrates the RIGHT way to handle multiple state updates
 * 
 * Solution: Use a callback function to get the previous count value
 * This ensures each update is based on the previously updated value.
 * 
 * Why this works:
 * - Instead of passing count + 1, we pass a callback function
 * - The callback receives the previous state for each setCount call
 * - This ensures every state update is applied correctly
 * - Result: count becomes 54 (50 + 1 + 1 + 1 + 1)
 * 
 * React Batching Explanation:
 * - React batches updates to make rendering more efficient
 * - If it re-rendered immediately for every setCount, performance would be reduced
 * - React collects all state updates in an event and applies them together
 * - When you pass a callback function, React queues each update properly
 */
export default function Counter() {
    const [count, setCount] = useState(50)
    const Increment_count = () => {
        setCount(previousCount => previousCount + 1) 
        setCount(previousCount => previousCount + 1)
        setCount(previousCount => previousCount + 1)
        setCount(previousCount => previousCount + 1)
    }
    return(
        <>
            <h1>Method 4 (CORRECT) - Count: {count}</h1>
            <button onClick={Increment_count}>Increment (adds 4)</button>
        </>
    )
}
