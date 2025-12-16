import styles from "./ButtonContainer.module.css"

function ButtonContainer({ buttons, handleBtn }) {
    return (
        <>
            <div className={styles["button-container"]}>
                {buttons.map((item) => <button 
                    key={item}
                    className={styles.button}
                    onClick={() => handleBtn(item)}
                >
                    {item === '*' ? '×' : item === '/' ? '÷' : item}
                </button>)}
            </div>
        </>
    )
}

export default ButtonContainer