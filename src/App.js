const Hello = () => {
  return (
    <div>
      <p>Hello World</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <p>Greetings</p>
      <Hello/>
      <Hello/>
    </div>

  )

}
export default App