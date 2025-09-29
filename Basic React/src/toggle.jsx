import { useState } from "react"

export function Toggle() {
    const [name, setName] = useState(null)
    function toggleName() {
        if (!name) {
            setName("Bhavya")
        } else {
            setName(null)
        }
    }

    return <div>
        <h1>Name: {name}</h1>
        <button onClick={toggleName}>Show</button>
        <button onClick={toggleName}>Hide</button>
    </div>
}