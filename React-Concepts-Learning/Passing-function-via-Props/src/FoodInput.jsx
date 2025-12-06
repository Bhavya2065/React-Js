function FoodInput({handleSearchInput}) {

    return (
        <>
            <input 
                type="text" 
                placeholder='Search Your text..' 
                style={{margin: "10px 0px", width: "100%", border: "1px solid rgb(190,190,190)", 
                padding: "5px"}}
                onChange={handleSearchInput}
            />
        </>
    )
}

export default FoodInput