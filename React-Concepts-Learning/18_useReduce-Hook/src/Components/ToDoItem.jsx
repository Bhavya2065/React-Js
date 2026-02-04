import styles from "./ToDoItem.module.css"
import { AiFillDelete } from "react-icons/ai";
import { TodoContext } from "../store/ToDoItem-context";
import { useContext } from "react";

function ToDoItem({ ToDoName, ToDoDate }) {

    const { DeleteItem } = useContext(TodoContext);

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
                        <button className={styles.btn} onClick={() => DeleteItem(ToDoName)}><AiFillDelete /></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ToDoItem