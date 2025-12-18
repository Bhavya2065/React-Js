import { useRef, useContext } from "react"
import styles from "./ToDoHeader.module.css"
import { RiCalendarTodoFill } from "react-icons/ri";
import { TodoContext } from "../store/ToDoItem-context";

function ToDoHeader() {

    const {addNewItem} = useContext(TodoContext); // Used Object destructuring

    const name = useRef(null)
    const dueDate = useRef(null)

    const handleBuyButton = (event) => {
        event.preventDefault();
        const ToDoName = name.current.value;
        const ToDoDate = dueDate.current.value;
        if (ToDoName === "" || ToDoDate === "") {
            console.log("Please Enter a Valid Input");
        } else {
            addNewItem(ToDoName, ToDoDate)
            name.current.value = ""
            dueDate.current.value = ""
        }
    }

    return (
        <>
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <input type="text"
                            placeholder="Enter Todo Here"
                            className={styles["search-bar"]}
                            ref={name}
                        />
                    </div>
                    <div className="col">
                        <input type="date"
                            className={styles["date-picker"]}
                            ref={dueDate}
                        />
                    </div>
                    <div className="col">
                        <button
                            className={styles.button}
                            onClick={handleBuyButton}
                        >
                            <RiCalendarTodoFill />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ToDoHeader

// useRef stores a value that persists across renders without triggering re-render.
// useRef is used when a value is needed for logic or DOM access, not for UI display.
// Updating useRef does not cause the component to re-render.
// useRef is commonly used for DOM elements, timers, IDs, and previous values.
// useRef value is accessed and updated using the `.current` property.
// useRef is preferred when re-rendering is unnecessary.
// useState is used when a value change must update the UI.
// Key rule: UI change → useState, no UI change → useRef.