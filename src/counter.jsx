// Method 1

import { useState } from "react";

// import { useState } from "react"

// export const Counter = () => {
//     let [counter, updateCount] = useState(0)
//     const count = () => {
//         updateCount(counter++)
//     }
//     return (
//         <>
//             <h1>Count: {counter}</h1>
//             <button onClick={count}>Update Count</button>
//         </>
//     )
// }

// Method 2

// import { useState } from "react"

// export const Counter = () => {
//     let [counter, setCount] = useState(0)
//     return (
//         <>
//             <h1>Count: {counter}</h1>
//             <button onClick={() => setCount(++counter)}>Increment Count</button> 
//             <button onClick={() => setCount(--counter)}>Decrement Count</button> 
//         </>
//     )
// }

// You will must use either ++counter or counter+1, but don't use counter++ because it returns first value and then it increament.

// counter interview quaestion:

// wrong
// export function Counter() {
//     const [count, setCount] = useState(50)
//     const Increment_count = () => {
//         setCount(count + 1)
//         setCount(count + 1)
//         setCount(count + 1)
//         setCount(count + 1)
//     }
//     return(
//         <>
//             <h1>Count: {count}</h1>
//             <button onClick={Increment_count}>Increment</button>
//         </>
//     )
// }

// right
export function Counter() {
    const [count, setCount] = useState(50)
    const Increment_count = () => {
        setCount(previousCount => previousCount + 1) 
        setCount(previousCount => previousCount + 1)
        setCount(previousCount => previousCount + 1)
        setCount(previousCount => previousCount + 1)
        // we don't write the setCount((previousCount) => previousCount + 1) because in this function only one parameter is passed.
    }
    return(
        <>
            <h1>Count: {count}</h1>
            <button onClick={Increment_count}>Increment</button>
        </>
    )
}

// Why: React batches updates to make rendering more efficient.
// If it re-rendered immediately for every setCount, performance would be reduced.
// So instead, React collects all state updates in an event, and then applies them together.
// Because of that batching, if you only pass a value (count + 1), React doesn’t re-calculate it for each step—it just reuses the same calculation.

// What the right code does: instead of pass the incremental variable setCount(count + 1) we pass the callback function setCount(previousCount => previousCount + 1) and get the value of the previous updated count for each setCount() so that every time the value is updating and get in previousCount.