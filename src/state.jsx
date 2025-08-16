import { useState } from "react";

export function State() {
    const [fruit, setFruit] = useState("Apple")
    const changefruit = () => {
        // setFruit = "Bananna" <- we can't update value like this because the setFruit is not variable, it is a function of setState
        setFruit("Banana") // correct method to upadate value
    }
    return (
        <>
            <h1>{fruit}</h1>
            <button onClick={changefruit}>Change the fruit</button>
        </>
    )
}