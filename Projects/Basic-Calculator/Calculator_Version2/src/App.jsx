import styles from "./App.module.css"
import Display from "./Components/Display"
import ButtonContainer from "./Components/ButtonContainer"
import { useState } from "react"

function App() {
  const symbol = ["%", "/", "*", "+", "-"]
  const [calval, setcalVal] = useState("")
  const handleBtn = (ButtonName) => {
    if (ButtonName === 'C') {
      setcalVal("")
    } else if (ButtonName === '=') {
      setcalVal(eval(calval)) // It calculate the string numeric i.e "2 + 2" = 4 (datatype: number)
    }
    else {
      if (symbol.includes(ButtonName)) {
        setcalVal(`${calval} ${ButtonName} `) // It take a space around the all symbols
      } else {
        setcalVal(calval + ButtonName) // It adds the value in existing value like 1, 12, 123, 1234 etc for displaying the value on the screen
      }
    }
  }

  const buttons = ["C", "()", "%", "/", "1", "2", "3", "*", "4", "5", "6", "+", "7", "8", "9", "-", ".", "0", "00", "="]


  return (
    <>
      <div className={styles.calculator}>
        <Display displayVal={calval} />
        <ButtonContainer
          buttons={buttons}
          handleBtn={handleBtn}
        />
      </div>
    </>
  )
}

export default App
