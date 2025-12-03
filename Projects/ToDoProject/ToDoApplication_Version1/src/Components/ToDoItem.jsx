import styles from "./ToDoItem.module.css"

function ToDoItem({ToDoName, ToDoDate}) {
    return (
        <>
            <div className={`container text-center ${styles.box}`}>
            {/* We can Also define CSS module like that if we already use Bootstrap or tailwind */}
                <div className="row">
                    <div className="col">
                        {ToDoName}
                    </div>
                    <div className="col">
                        {ToDoDate}
                    </div>
                    <div className="col">
                        <button className={styles.btn}>Delete</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ToDoItem