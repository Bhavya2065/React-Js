import { useState } from 'react'
import './App.css'

function App() {

  const [color, setColor] = useState("gray")

  return (
    <>
      <div className='h-screen w-screen flex justify-center' style={{backgroundColor: color}}>
        <div className="flex border-2 p-2 rounded-4xl w-[900px] bg-teal-400 absolute top-130 justify-center shadow-lg">
          <button className=" py-1 rounded-lg mx-2 px-2 cursor-pointer bg-white" id="color1" onClick={() => setColor("white")}>White</button>
          <button className=" py-1 rounded-lg mx-2 px-2 text-white cursor-pointer bg-black" id="color2" onClick={() => setColor("black")}>Black</button>
          <button className=" py-1 rounded-lg mx-2 px-2 text-white cursor-pointer bg-red-500" id="color3" onClick={() => setColor("red")}>Red</button>
          <button className=" py-1 rounded-lg mx-2 px-2 text-white cursor-pointer bg-green-700" id="color4" onClick={() => setColor("green")}>Green</button>
          <button className=" py-1 rounded-lg mx-2 px-2 text-white cursor-pointer bg-blue-700" id="color5" onClick={() => setColor("blue")}>Blue</button>
          <button className=" py-1 rounded-lg mx-2 px-2 text-white cursor-pointer bg-indigo-500" id="color6" onClick={() => setColor("indigo")}>Indigo</button>
          <button className=" py-1 rounded-lg mx-2 px-2 text-white cursor-pointer bg-purple-500" id="color7" onClick={() => setColor("purple")}>Purple</button>
          <button className=" py-1 rounded-lg mx-2 px-2 text-white cursor-pointer bg-orange-400" id="color8" onClick={() => setColor("orange")}>Orange</button>
          <button className=" py-1 rounded-lg mx-2 px-2 text-white cursor-pointer bg-pink-300" id="color9" onClick={() => setColor("pink")}>Pink</button>
          <button className=" py-1 rounded-lg mx-2 px-2 text-white cursor-pointer bg-yellow-300" id="color10" onClick={() => setColor("yellow")}>Yellow</button>
        </div>
      </div>
    </>
  )
}

export default App
