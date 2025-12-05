function FoodInput() {

    function handleSearchInput(val) {
        console.log(val);
    }

    return (
        <>
            <input 
                type="text" 
                placeholder='Search Your text..' 
                style={{margin: "10px 0px", width: "100%", border: "1px solid rgb(190,190,190)", 
                padding: "5px"}}
                onChange={(event) => handleSearchInput(event.target.value)}
            />
        </>
    )
}

export default FoodInput