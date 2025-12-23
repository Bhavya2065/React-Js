import './App.css'
import ClockHeading from './Components/ClockHeading'
import CurrentTime from './Components/CurrentTime'
import ClockData from './Components/ClockData'
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <>
      <center>
        <ClockHeading />
        <ClockData />
        <CurrentTime />
      </center>
    </>
  )
}

export default App
