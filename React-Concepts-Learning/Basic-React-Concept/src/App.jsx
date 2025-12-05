import Login, { Profile, Setting, name } from "./login"

function App() {

  return (
    <>
      <Login />
      <Profile />
      <Setting />
      <h1>{name}</h1>
    </>
  )
}

export default App
