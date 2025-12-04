function Items({items}) {
    return (
        <>
            {items.map((items) => <li key={items} className="list-group-item">{items}</li>)}
        </>
    )
}   

export default Items

// Note: A key is a unique identifier that tells React which list item is which, so it can keep the correct state, DOM, and order even when items are added, removed, or reordered.