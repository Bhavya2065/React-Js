import ToDoItem from "./ToDoItem"

function ToDoItems({todoItems}) {
    return (
        <>
            {todoItems.map((items) => <ToDoItem ToDoName={items.Name} ToDoDate={items.dueDate} />)}
        </>
    )
}

export default ToDoItems