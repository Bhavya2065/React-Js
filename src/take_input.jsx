import { useState } from "react";

export default function GetInput() {
  // 1. Use 'const' and initialize state with an empty string ''.
  const [name, setName] = useState('');

  return (
    <>
      <h1>Input Field</h1>
      <input
        type="text"
        placeholder="Enter your Name"
        value={name}
        // 2. Pass the 'event' object to your arrow function.
        onChange={(event) => setName(event.target.value)}
      />

      <h1>{name}</h1>

      <button type="submit" style={{ margin: "10px" }}>Submit</button>

      {/* 3. The reset button should set the state back to the initial empty string. */}
      <button type="reset" onClick={() => setName('')}>Reset</button>
    </>
  );
}