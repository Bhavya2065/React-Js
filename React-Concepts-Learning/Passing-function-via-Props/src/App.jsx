import 'bootstrap/dist/css/bootstrap.min.css';
import FoodItems from "./FoodItems"
import Container from './Container';

function App() {

  const foodItem = ["vegetables", "fruits", "Salad", "Milk", "Ghee"]
  return (
    <>
      <Container>
        <FoodItems foodItems={foodItem} />
      </Container>
    </>
  )
}

export default App

