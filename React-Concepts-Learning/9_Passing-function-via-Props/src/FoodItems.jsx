import FoodInput from "./FoodInput"
import Items, { Product } from "./Items"

function FoodItems({ foodItems }) {

    function handleSearchInput(val) {
        console.log(val);
    }

    return (
        <>
            <h1>Healthy Food</h1>
            <FoodInput handleSearchInput={handleSearchInput}></FoodInput>
            <ul className="list-group" style={{ border: "1px solid rgb(190,190,190)" }}>
                <Items
                    items={foodItems}
                    handleButton={() => console.log(`${foodItems} bought`)}
                >
                </Items>
                <Product items={foodItems}></Product>
            </ul>
        </>
    )
}

export default FoodItems