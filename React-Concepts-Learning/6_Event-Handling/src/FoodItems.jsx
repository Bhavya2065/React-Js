import FoodInput from "./FoodInput"
import Items, {Product} from "./Items"

function FoodItems({ foodItems }) {
    return (
        <>
            <h1>Healthy Food</h1>
            <FoodInput></FoodInput>
            <ul className="list-group" style={{border: "1px solid rgb(190,190,190)"}}>
                <Items items={foodItems}></Items>
                <Product items={foodItems}></Product>
            </ul>
        </>
    )
}

export default FoodItems