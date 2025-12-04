import styles from "./ButtonContainer.module.css"

function ButtonContainer({ buttons }) {
    return (
        <>
            <div className={styles["button-container"]}>
                {buttons.map((item) => <button key={item} className={styles.button}>{item}</button>)}
            </div>
        </>
    )
}

export default ButtonContainer