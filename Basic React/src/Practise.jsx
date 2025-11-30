import React, { useState } from 'react'

function Practise() {
    const [count, setcount] = useState(0)
    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => setcount(count + 1)}>Increment</button>
        </>
    )
}

export default Practise