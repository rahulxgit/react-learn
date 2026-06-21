import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  /*
    ==============================
    React Hooks -> useState Notes
    ==============================

    useState is a React Hook used to:
    1. Store data in a component
    2. Update data
    3. Automatically update the UI

    Syntax:
    const [state, setState] = useState(initialValue)

    Example:
    const [counter, setCounter] = useState(15)

    Here:
    counter     -> current state value
    setCounter  -> function used to update the state
    15          -> initial value

    Important:
    useState returns an ARRAY.
    We use array destructuring to access values.

    React re-renders the component whenever state changes.
  */

  const [counter, setCounter] = useState(15)

  /*
    ==========================================
    Why Normal Variables Do NOT Update the UI
    ==========================================

    Example:
    let counter = 5

    Problem:
    React does NOT track normal JavaScript variables.

    If we do:
    counter = counter + 1

    only the variable value changes in memory,
    but React does not know that UI should update.

    Therefore:
    - Console value changes
    - UI remains the same

    React updates UI only when:
    1. State changes
    2. Props change
    3. Parent component re-renders

    Solution:
    Use useState because it:
    1. Stores values between renders
    2. Tells React to re-render the component
  */

  // Function to increase counter value
  const addValue = () => {

    console.log("Value added:", Math.random(), counter);

    /*
      setCounter(counter + 1)

      What happens here?

      1. Updates counter value
      2. React re-renders the component
      3. Updated value appears on screen
    */

    setCounter(counter + 1)
  }

  // Function to decrease counter value
  const decValue = () => {

    /*
      Prevent counter from going below 0
    */

    if(counter > 0){
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Chai aur React</h1>

      {/* Display current counter value */}
      <h2>Counter value: {counter}</h2>

      {/* Button to increase counter */}
      <button onClick={addValue}>
        Add value {counter}
      </button>

      <br />

      {/* Button to decrease counter */}
      <button onClick={decValue}>
        Decrease value {counter}
      </button>

      {/* Footer displaying counter */}
      <p>Footer: {counter}</p>
    </>
  )
}

export default App