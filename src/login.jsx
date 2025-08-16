// First Method of Export component.

function Login(){
    return(
        <>
            <h1>Login Submit</h1>
        </>
    )
}

export default Login // we can't define two default exports in same file

// second Method of Export Component.

export function Profile(){
    return(
        <h1>Profile</h1>
    )
}


export function Setting(){
    return(
        <h1>Setting</h1>
    )
}

export const name = "Harshil" // We can also export the variables