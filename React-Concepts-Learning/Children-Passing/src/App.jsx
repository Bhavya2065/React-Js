import Wrapper from "./Wrapper"

function App() {

  return (
    <>
      <Wrapper color="blue">
        <h1>What is your Name</h1>
      </Wrapper>
      <Wrapper>
        <h1>Hello Everyone</h1>
      </Wrapper>
      <Wrapper color="">
        <h1>How Are you</h1>
      </Wrapper>
      <Wrapper data="Secure Data">
        <h1>Hello</h1>
        <p>This is inside container</p>
      </Wrapper>
      <Wrapper data="Healthy Foods">
        <p>List of healthy foods and it is good for health.</p>
      </Wrapper>
    </>
  )
}

export default App
