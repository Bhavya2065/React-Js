import styles from "./ToDoItem.module.css"
import { AiFillDelete } from "react-icons/ai";

function ToDoItem({ToDoName, ToDoDate, Delete_tem}) {
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
                        <button className={styles.btn} onClick={() => Delete_tem(ToDoName)}><AiFillDelete /></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ToDoItem