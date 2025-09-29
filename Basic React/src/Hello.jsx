export default function Hello() {
  let myName = () => {
    return "Bhavya"
  }
  return (
    <>
      <h2 style={{ backgroundColor: "green" }}>Hello My name is {myName()}</h2>
    </>
  )
}