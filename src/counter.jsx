// Method 1

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

import { useState } from "react"

export const Counter = () => {
    let [counter, setCount] = useState(0)
    return (
        <>
            <h1>Count: {counter}</h1>
            <button onClick={() => setCount(++counter)}>Increment Count</button> 
            <button onClick={() => setCount(--counter)}>Decrement Count</button> 
        </>
    )
}

// You will must use either ++counter or counter+1, but don't use counter++ because it returns first value and then it increament.