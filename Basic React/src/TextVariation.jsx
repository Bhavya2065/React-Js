import React, { useState } from 'react'

function TextVariation() {
    let state = 0
    const [show, setshow] = useState(true)
    return (
        <>
            {show && <h1>This is Megical sentence.</h1>}
            <button onClick={() => setshow(!show)}>Show / Hide</button>
        </>
    )
}

export default TextVariation