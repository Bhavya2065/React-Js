import ToDoHeader from "./Components/ToDoHeader";
import ToDoHeading from "./Components/ToDoHeading"
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDoItems from "./Components/ToDoItems";
import { useState } from "react";
import WelcomeMessage from "./Components/WelcomeMessage";

function App() {

  const handleDeleteButton = (ToDoName) => {
    let newTodoList = todoItems.filter((item) => item.Name !== ToDoName)
    settodoItems(newTodoList)
  }

  function handletodoitems(todoname, tododate) {

    // This method is not good for huge data or Asynchronous updates(Many updates do at the same time)

    // const newItem = {
    //   Name: todoname,
    //   dueDate: tododate
    // }
    // settodoItems([...todoItems, newItem]) 

    // Right approach: Take a previous value and add the new object.

    settodoItems((currValue) => [
      ...currValue, {Name: todoname, dueDate: tododate}
    ])
  }
  const [todoItems, settodoItems] = useState([
    {
      Name: "Buy groceries",
      dueDate: "2025-12-17"
    },
    {
      Name: "Complete React assignment",
      dueDate: "2025-12-20"
    },
    {
      Name: "Pay electricity bill",
      dueDate: "2025-12-22"
    },
    {
      Name: "Prepare for exam",
      dueDate: "2025-12-25"
    }
  ])

  return (
    <>
      <ToDoHeading />
      <ToDoHeader Todoitems={handletodoitems} />
      {todoItems.length === 0 && <WelcomeMessage />}
      <ToDoItems todoItems={todoItems} DeleteItem={handleDeleteButton} />
    </>
  )
}

export default App
