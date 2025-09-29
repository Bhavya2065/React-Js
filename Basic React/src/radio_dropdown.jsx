import { useState } from "react"

export default function RadioDropdown() {
    const [gender, setGender] = useState("")
    const [state, setstate] = useState("")
    return(
        <>
            <div>
                <h1>Radio Button: {gender}</h1>
                <input type="radio" value="Male" name="gender" id="male" onChange={(event) => setGender(event.target.value)}/>
                <label htmlFor="male">Male</label>
                <input type="radio" value="Female" name="gender" id="female" onChange={(event) => setGender(event.target.value)}/>
                <label htmlFor="female">Female</label>
                <br /><br /><br />
                <h1>Dropdown Button: {state}</h1>
                <select id="" onChange={(event) => setstate(event.target.value)} defaultChecked={"Gujarat"}>
                    <option value="Gujarat" >Gujarat</option>
                    <option value="Maharastra" >Maharashra</option>
                    <option value="Odisha" >Odisha</option>
                </select>
            </div>
        </>
    )
}