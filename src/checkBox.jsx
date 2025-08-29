import { useState } from "react";

export default function CheckBox() {
    const [skill, setSkill] = useState([]);

    const handleSkill = (event) => {
        const { value, checked } = event.target; // event.target triggered the event when click on the any checkbox
        // Create a new variable value and assign it event.target.value.
        // Create a new variable value and assign it event.target.checked.

        if (checked) {
            // Add the value to the array if checked
            setSkill([...skill, value]);
        } else {
            // Remove the value from the array if unchecked
            setSkill(skill.filter((item) => item !== value));
        }
    };

    return (
        <>
            <h1>How to handle CheckBoxes?</h1>
            <div>
                <input type="checkbox" value="PHP" id="php" onChange={handleSkill} />
                <label htmlFor="php"> PHP</label>
                <br />
                <input type="checkbox" value="JS" id="js" onChange={handleSkill} />
                <label htmlFor="js"> JS</label>
                <br />
                <input type="checkbox" value="C#" id="C#" onChange={handleSkill} />
                <label htmlFor="C#"> C#</label>
                <br />
            </div>

            <h1>Selected Skills: {skill.join(', ')}</h1>
        </>
    );
}