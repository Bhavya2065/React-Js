import { useState } from "react";

export function CheckNum() {
    let [count, setCount] = useState(0)
    const [status, setStatus] = useState("Even")
    const stateCounter = () => {
        count = count + 1
        setCount(count)
        setStatus(count % 2 == 0 ? "Even" : "Odd")
    }
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={stateCounter}>Increment Count</button>
            <h1>{status}</h1>
        </div>
    )
}