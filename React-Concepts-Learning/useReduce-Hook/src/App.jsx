import ToDoHeader from "./Components/ToDoHeader";
import ToDoHeading from "./Components/ToDoHeading"
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDoItems from "./Components/ToDoItems";
import WelcomeMessage from "./Components/WelcomeMessage";
import ToDoItemContextProvider from "./store/ToDoItem-context";

function App() {

  return (
    <>
      <ToDoItemContextProvider>
        <ToDoHeading />
        <ToDoHeader />
        <WelcomeMessage />
        <ToDoItems />
      </ToDoItemContextProvider>
    </>
  )
}

export default App