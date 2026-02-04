import { createContext } from "react";
import { useReducer } from "react";

export const TodoContext = createContext({
    todoItems: [],
    addNewItem: () => { },
    DeleteItem: () => { }
});

function todoItemOperations(currValue, action) {
    let newItem = currValue;
    if (action.type === "ADD_ITEM") {
        newItem = [...currValue, { Name: action.payload.todoname, dueDate: action.payload.tododate }]
    } else {
        newItem = currValue.filter((item) => item.Name !== action.payload.todoname)
    }
    return newItem;
}

const ToDoItemContextProvider = ({ children }) => {
    const [todoItems, dispatchtodoItems] = useReducer(todoItemOperations, []);

    const DeleteItem = (todoname) => {

        const deleteItemAction = {
            type: "DELETE_ITEM",
            payload: {
                todoname
            }
        }
        dispatchtodoItems(deleteItemAction)
    }

    function addNewItem(todoname, tododate) {

        const addItemAction = {
            type: "ADD_ITEM",
            payload: {
                todoname,
                tododate
            }
        }
        dispatchtodoItems(addItemAction)
    }

    return (
        <>
            <TodoContext.Provider value={{
                todoItems,
                addNewItem,
                DeleteItem
            }}>
                {children}
            </TodoContext.Provider>
        </>
    )
}

export default ToDoItemContextProvider;