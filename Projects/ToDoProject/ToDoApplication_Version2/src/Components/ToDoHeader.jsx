import { useState } from "react"
import styles from "./ToDoHeader.module.css"
import { RiCalendarTodoFill } from "react-icons/ri";

function ToDoHeader({ Todoitems }) {
    // let ToDoDate, ToDoName; // We can't define like that because Component re-renders ----> values are lost
    const [ToDoName, setToDoName] = useState("")
    const [ToDoDate, setToDoDate] = useState("")

    const handleBuyButton = () => {
        if (ToDoDate.length === 0 && ToDoName.length === 0) {
            console.log("Please enter the value");
            
        } else {
            Todoitems(ToDoName, ToDoDate)
            setToDoDate("")
            setToDoName("")
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
                            onChange={(event) => setToDoName(event.target.value)}
                            value={ToDoName} // If we not define then How can the React know that the new value is set.
                        />
                    </div>
                    <div className="col">
                        <input type="date"
                            className={styles["date-picker"]}
                            onChange={(event) => setToDoDate(event.target.value)}
                            // It converts the string format to Date format(date is bydefault consider as object)
                            value={ToDoDate}
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