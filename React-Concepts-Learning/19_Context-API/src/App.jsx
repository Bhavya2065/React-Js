import ToDoHeader from "./Components/ToDoHeader";
import ToDoHeading from "./Components/ToDoHeading";
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDoItems from "./Components/ToDoItems";
import { useState } from "react";
import WelcomeMessage from "./Components/WelcomeMessage";
import { TodoContext } from "./store/ToItem-context";

function App() {

  const DeleteItem = (ToDoName) => {
    let newTodoList = todoItems.filter((item) => item.Name !== ToDoName)
    settodoItems(newTodoList)
  }

  function addNewItem(todoname, tododate) {

    settodoItems((currValue) => [
      ...currValue, { Name: todoname, dueDate: tododate }
    ])
  }

  const [todoItems, settodoItems] = useState([])

  return (
    <>
      <TodoContext.Provider value={{
        todoItems,
        addNewItem,
        DeleteItem
      }}>
        <ToDoHeading />
        <ToDoHeader />
        <WelcomeMessage />
        <ToDoItems />
      </TodoContext.Provider>
    </>
  )
}

export default App


// Note:

// Context Provider is a React feature that lets you share data globally across components without passing props again and again.

// Normally, data flows like this using props:

// Parent → Child → Grandchild → Great-Grandchild

// This becomes messy when many components need the same data (called prop drilling).

// Context Provider solves this by acting like a central store where data is kept, and any component can read it directly.

// 🔑 Key Points to Remember (Must-Know)

// Use Context only for global data, not for small local states
// Context helps avoid prop drilling, nothing more
// Wrap the Provider above all components that need the data
// Any component outside the Provider cannot access the context
// Changing context value re-renders all consuming components
// Keep context small and focused (don’t store everything in one)
// Create separate contexts for different concerns (auth, theme, cart)
// Use useContext() hook to read the value, not props
// Context is not a replacement for Redux for very large apps
// Best for data like user, theme, language, settings

{/* <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Header />     ✅ can use context
      <Footer />     ✅ can use context
    </ThemeContext.Provider>
      <Sidebar />      ❌ cannot use context */}

// shortcut: You can pass object with the single name if the name of the key and value are same.

{/* <TodoContext.Provider value={{
        todoItems: todoItems,
        addNewItem: addNewItem,
        DeleteItem: DeleteItem
      }}
    > */}


{/* <TodoContext.Provider value={{
        todoItems,
        addNewItem,
        DeleteItem
      }}
    > */}