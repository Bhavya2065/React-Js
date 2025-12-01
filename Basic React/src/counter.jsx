import React, { useState } from 'react'

function Counter() {
    const [count, setcount] = useState(0)
    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => setcount(count + 1)}>Increment</button> {/* First method */}
            <button onClick={() => setcount(pre => pre + 1)}>Increment</button> {/* Second method */}
        </>
    )
}

export default Counter