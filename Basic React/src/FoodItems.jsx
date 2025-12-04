import Items from "./Items"

function FoodItems({ foodItems }) {
    return (
        <>
            <h1>Healthy Food</h1>
            <ul className="list-group">
                <Items items={foodItems}></Items>
            </ul>
        </>
    )
}

export default FoodItems