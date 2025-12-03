import styles from "./App.module.css"
import Display from "./Components/Display"
import ButtonContainer from "./Components/ButtonContainer"

function App() {
  const buttons = ["C", "()", "%", "÷", "1", "2", "3", "×", "4", "5", "6", "+", "7", "8", "9", "-", ".", "0", "00", "="]
  return (
    <>
      <div className={styles.calculator}>
        <Display />
        <ButtonContainer buttons={buttons} />
      </div>
    </>
  )
}

export default App
