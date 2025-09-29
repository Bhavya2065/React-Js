import { useEffect, useState, useCallback, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [character, setCharacter] = useState(false)
  const [password, setPassword] = useState()
  const passwordRef = useRef(null)

  const generatePassword = () => {
    let pass = ""
    const num = "0123456789"
    const specialChar = "!@#$%^&*()_+?"
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (number) {
      str += num
    }
    if (character) {
      str += specialChar
    }
    for (let i = 0; i < length; i++) {
      const randomNum = Math.floor(Math.random() * str.length)
      pass += str.charAt(randomNum);
    }
    setPassword(pass);
  }

  useEffect(() => {
    generatePassword()
  }, [length, number, character])

  const copyPassword = () => {
    if (password) {
      passwordRef.current?.select() // It select the copied text so that user knows that the password is copied
      navigator.clipboard.writeText(password).then(() => {
        // document.getElementsByTagName('button')[0].textContent = "Copied!!"; 
        document.querySelector('button').textContent = "Copied!!"

        // getElementsByTagName() does work, but it doesn’t give you a single element. It returns an HTMLCollection (like an array of elements)

      }).catch(() => {
        alert(console.error(err))
      })
    }
  }

  return (
    <>
      <div className='text-center relative top-20 bg-gray-700 max-w-fit mx-auto p-5 rounded-2xl'>
        <div className='w-lg'>
          <div className='flex mb-4'>
            <input type="text" placeholder='Password' name="password" value={password} className='bg-white text-orange-700 text-xl font-semibold rounded-l-xl w-full px-2' ref={passwordRef} readOnly />
            <button className='bg-blue-500 w-auto rounded-r-xl cursor-pointer px-5 py-3' onClick={copyPassword}>Copy</button>
          </div>
          <div className='flex gap-x-5'>
            <div className='flex align-middle gap-1'>
              <input type="range" min={6} max={20} value={length} onChange={(e) => setLength(Number(e.target.value))} />
              <label className='w-20'>Length: {length}</label>
            </div>
            <div className='flex align-middle gap-1'>
              <input type="checkbox" name="" id="number" onChange={() => setNumber(pre => !pre)} />
              <label htmlFor="number">Number</label>
            </div>
            <div className='flex align-middle gap-1'>
              <input type="checkbox" name="" id="character" onChange={() => setCharacter(pre => !pre)} />
              <label htmlFor="character">Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
