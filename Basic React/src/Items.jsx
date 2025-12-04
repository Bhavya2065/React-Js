function Items({ items }) {

    const handleButtonClick = (item) => {
        console.log(`${item} Button Clicked`);
    }

    return (
        <>
            {items.map((item) => {
                return (
                    <li key={item} className="list-group-item">
                        <span>{item}</span>
                        <button style={{backgroundColor: "rgb(80, 200, 120)", float: "right"}} 
                        onClick={() => handleButtonClick(item)}>Buy</button>
                    </li>
                )
            })}
        </>
    )
}

export default Items

// Note: A key is a unique identifier that tells React which list item is which, so it can keep the correct state, DOM, and order even when items are added, removed, or reordered.