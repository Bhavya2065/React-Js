export default function Wrapper({children, color="red"}){ // It takes bydefault red color if color is not passed
    return (
        <>
            <div style={{color: color, border: "10px solid green", width:"600px", padding: "5px", margin:"10px"}}>
                {children}
            </div>
        </>
    )
}

// Note: Used to give the By default Style and as well as dynamic style.