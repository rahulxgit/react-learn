
import Chai from "./Chai"

//how to inject variable, js or jsx
function App() {
  const userName = "rahul"
  return (
    <>
      <h1> Hellow This is me  Vite + React {userName} </h1> {/* evaluated expression */}
      <Chai />  
     
    </>
  )
}

export default App
