import React, { useContext } from 'react'
import { TodoContext } from '../store/ToDoItem-context'

function WelcomeMessage() {

  const todolistContext = useContext(TodoContext);
  const todoItems = todolistContext.todoItems;

  return (
    todoItems.length === 0 && <div style={{ textAlign: "center", fontSize: "20px", margin: "20px" }}>Have a nice day</div>
  )
}

export default WelcomeMessage