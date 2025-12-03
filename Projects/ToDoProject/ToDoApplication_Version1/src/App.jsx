import ToDoHeader from "./Components/ToDoHeader";
import ToDoHeading from "./Components/ToDoHeading"
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDoItems from "./Components/ToDoItems";

function App() {
  const todoItems = [
    {
      Name: "Buy Milk",
      dueDate: "4/10/2023"
    },
    {
      Name: "Go To College",
      dueDate: "4/10/2023"
    },
    {
      Name: "Go To Tution",
      dueDate: "5/8/2023"
    },
    {
      Name: "Rent home",
      dueDate: "23/12/2025"
    }
  ]
  return (
    <>
      <ToDoHeading />
      <ToDoHeader />
      <ToDoItems todoItems={todoItems}/>
    </>
  )
}

export default App
