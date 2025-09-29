import './App.css'
import Card from './components/card'

function App() {
  let myArr = [1,2,3]
  return (
    <>
      <h1 className="bg-green-200 text-black p-4 rounded-xl">Telwind check</h1>
      <Card heading="Header" />
      <Card heading="Footer" btnText="Download"/>
      {/* <Card arr={myArr}/> <== We can pass the variable of array like this {} */}
    </>
  )
}

export default App