function Items({ item, bought, handleBuyButton }) {

    return (
        <>
            {console.log(bought)}
            <li key={item} className={`list-group-item ${bought && "active"}`}>
                <span>{item}</span>
                <button style={{ backgroundColor: "rgb(80, 200, 120)", float: "right" }}
                    onClick={handleBuyButton}>Buy</button>
            </li>
        </>
    )
}

export default Items

// Note: A key is a unique identifier that tells React which list item is which, so it can keep the correct state, DOM, and order even when items are added, removed, or reordered.