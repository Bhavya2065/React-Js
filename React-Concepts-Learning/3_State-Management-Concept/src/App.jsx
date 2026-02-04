import 'bootstrap/dist/css/bootstrap.min.css';
import FoodItems from "./FoodItems"
import Container from './Container';
import FoodInput from "./FoodInput"
import { useState } from 'react';
import ErrorMessage from './ErrorMessage';

function App() {

  const [foodItem, setfoodItem] = useState(["vegetables", "fruits", "Salad", "Milk", "Ghee"])

  function handleSearchInput(event) {
    if (event.key === "Enter") {
        let newItem = event.target.value;
        console.log(newItem);
        setfoodItem([...foodItem, newItem])
    }
  }

  return (
    <>
      <Container>
        <h1>Healthy Food</h1>
        <FoodInput handleSearchInput={handleSearchInput}></FoodInput>
        <ErrorMessage Items={foodItem}/>
        <FoodItems foodItems={foodItem} />
      </Container>
    </>
  )
}

export default App

