import { useContext } from "react"
import ToDoItem from "./ToDoItem"
import { TodoContext } from "../store/ToItem-context"

function ToDoItems() {

    const { todoItems } = useContext(TodoContext); // Used object destructuring

    return (
        <>
            {todoItems.map((items) => <ToDoItem
                key={items.Name}
                ToDoName={items.Name}
                ToDoDate={new Date(items.dueDate).toLocaleDateString()}
            />)}
        </>
    )
}

export default ToDoItems

// Shortcut:

// Situation: In this situation we define one object named contextObj and use the value todoItems From that object.
// One line shortcut: Object destructuring

// before shortcut:
// const contextObj = useContext(TodoContext);
// const todoItems = contextObj.todoItems;

// after shortcut:
// const {todoItems} = useContext(TodoContext);