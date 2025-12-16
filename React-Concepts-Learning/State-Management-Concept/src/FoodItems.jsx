import { useState } from "react"
import Items from "./Items"

function FoodItems({ foodItems }) {

    const [ActiveItems, setActiveItems] = useState([])

    let onBuyButton = (item) => {
        setActiveItems([...ActiveItems, item])
    }

    return (
        <>
            <ul className="list-group" style={{ border: "1px solid rgb(190,190,190)" }}>
                {foodItems.map((item) => <Items
                    key={item}
                    item={item}
                    bought={ActiveItems.includes(item)}
                    handleBuyButton={() => onBuyButton(item)}
                >
                </Items>)}
            </ul>
        </>
    )
}

export default FoodItems