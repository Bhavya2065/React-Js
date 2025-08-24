export function Default_Prop({name="New User"}){ // New User is a Default Prop.
    return(
        <>
            <h1>Hi, {name}</h1>
        </>
    )
}

// Wrapper jsx -> give style

export function Wrapper({children, color="red"}){ // It takes bydefault red color if color is not set
    return (
        <>
            <div style={{color: color, border: "10px solid green", width:"600px", padding: "5px", margin:"10px"}}>
                {children}
            </div>
        </>
    )
}