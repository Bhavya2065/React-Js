function Items({ items }) {

    function handleButtonClick(items) {
        console.log(`${items} Button Clicked`);
    }

    return (
        <>
            {items.map((items) => {
                return (
                    <li key={items} className="list-group-item">
                        <span>{items}</span>
                        <button style={{backgroundColor: "rgb(80, 200, 120)", float: "right"}} onClick={() => handleButtonClick(items)}>Buy</button>
                    </li>
                )
            })}
        </>
    )
}

export default Items

// Note: A key is a unique identifier that tells React which list item is which, so it can keep the correct state, DOM, and order even when items are added, removed, or reordered.