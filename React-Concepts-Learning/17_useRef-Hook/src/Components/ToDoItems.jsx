import ToDoItem from "./ToDoItem"

function ToDoItems({todoItems, DeleteItem}) {

    return (
        <>
            {todoItems.map((items) => <ToDoItem 
                key={items.Name}
                ToDoName={items.Name}
                ToDoDate={new Date(items.dueDate).toLocaleDateString()}
                Delete_tem={DeleteItem}
            />)}
        </>
    )
}

export default ToDoItems