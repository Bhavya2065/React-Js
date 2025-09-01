// Method 1: Static Data sending

export function Static_propes({data}){
    return(
        <>
            <h1>{data}</h1>
        </>
    )
}

export default function Dynamic_propes({name, age}){
    return (
        <>
            <div>
                <h1>{name}</h1>
                <h1>{age}</h1>
            </div>
        </>
    )
}

export function Object_propes({user}){
    console.log(user);
    return(
        <>
            <hr />
            <h1>{user.name}</h1>
            <h1>{user.email}</h1>
        </>
    )
}

export function Name({name}) {
    return(
        <>
            {name && <h1>Student Name: {name}</h1>} 
            {/* This condition use: if the student name is provided in the state then only It prints this statement */}
        </>
    )
}