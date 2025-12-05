export function Static_propes({ data }) {
    return (
        <>
            <h1>{data}</h1>
        </>
    )
}

export default function Dynamic_propes({ name, age }) {
    return (
        <>
            <hr />
            <div>
                <h1>{name}</h1>
                <h1>{age}</h1>
            </div>
        </>
    )
}

export function Object_propes({ user }) {
    console.log(user);
    return (
        <>
            <hr />
            <h1>{user.name}</h1>
            <h1>{user.email}</h1>
        </>
    )
}

export function Name({ name }) {
    return (
        <>
            <hr />  
            {name && <h1>Student Name: {name}</h1>}
            {/* This condition use: if the student name is provided in the state then only It prints this statement */}
        </>
    )
}

export function WithoutDestructuring(props) {
    return (
        <>
            <hr />
            <h1>{props.name}</h1>
            <h1>{props.age}</h1>
            {/* Here we pass the data without using destructuring of js like {data} as above example */}
        </>
    )
}

export function Default_Prop({name="New User"}){ // New User is a Default Prop.
    return(
        <>
            <h1>Hi, {name}</h1>
        </>
    )
}