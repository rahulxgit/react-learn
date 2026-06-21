import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let MyObj = {
    userName : "rahul",
    age : 22 
  }

  let arr = [1,2,3];

  return (
    <>
      <h1 className='bg-green-600 text-black p-4 rounded-xl'>Tailwind test</h1>
      < Card userName = "myName" someObj = {arr}  />

      < br />
      < Card />
      
    </>
  )
}

export default App
