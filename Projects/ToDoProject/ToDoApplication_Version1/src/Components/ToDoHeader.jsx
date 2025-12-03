import styles from "./ToDoHeader.module.css"

function ToDoHeader() {
    return (
        <>
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <input type="text" placeholder="Enter Todo Here" className={styles["search-bar"]}/>
                    </div>
                    <div className="col">
                        <input type="date" className={styles["date-picker"]}/>
                    </div>
                    <div className="col">
                        <button className={styles.button}>Add</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ToDoHeader