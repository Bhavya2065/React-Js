function ConditionalRendering() {
    // let foodItem = ["Milk","vegetable","salad","panner","ladyfinger"]
    let foodItem = []
    return (
        <>
            <h1>Healthy Food</h1>
            {foodItem.length === 0 && <h3>I am Hungry</h3>}
            <ul>
                {foodItem.map((item) => <li key={item}>{item}</li>)}
            </ul>
        </>
    )
}

export default ConditionalRendering

/* 
function ConditionalRendering() {
    // let foodItem = ["Milk","vegetable","salad","panner","ladyfinger"]
    let foodItem = []

    if(foodItem.length === 0){
        return <h1>I am Hungry</h1>
    }

    return (
        <>
            <h1>Healthy Food</h1>
            <ul>
                {foodItem.map((item) => <li key={item}>{item}</li>)}
            </ul>
        </>
    )
}
*/

/*
function ConditionalRendering() {
    // let foodItem = ["Milk","vegetable","salad","panner","ladyfinger"]
    let foodItem = []
    let check = foodItem.length === 0 ? <h3>I am Hungry</h3> : null
    return (
        <>
            <h1>Healthy Food</h1>
            {check}
            <ul>
                {foodItem.map((item) => <li key={item}>{item}</li>)}
            </ul>
        </>
    )
}
*/