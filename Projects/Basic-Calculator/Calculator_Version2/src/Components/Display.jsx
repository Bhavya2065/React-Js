import styles from "./Display.module.css"

function Display({ displayVal }) {
    console.log(displayVal);
    const valueString = String(displayVal ?? "") // It convert the Numeric value to the string and then apply the replace method
    console.log(valueString);
    
    const formattedValue = valueString
        .replace(/\*/g, "×")
        .replace(/\//g, "÷")
    console.log(formattedValue)
    return (
        <>
            <input
                type="text"
                className={styles.display}
                value={formattedValue}
                readOnly
            />
        </>
    )
}

export default Display
