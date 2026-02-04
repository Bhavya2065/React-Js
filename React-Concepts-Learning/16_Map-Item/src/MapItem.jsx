export default function MapItem() {
    let foodItem = ["Milk","vegetable","salad","panner","ladyfinger"]
    return (
        <>
            <h1>Healthy Food</h1>
            <ul>
                {foodItem.map((item) => <li key={item}>{item}</li>)}
                {/* We get the warning if we don't add key: @react-refresh:228 Each child in a list should have a unique "key" */}
                {/* because these makes UI slow and It takes more time to render */}
            </ul>
        </>
    )
}
