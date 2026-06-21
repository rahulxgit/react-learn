import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import React from 'react'
// import Chai from './Chai.jsx'

function MyApp() {
  return(
    <div>
      <h1>This is app |</h1>
    </div>
  )
}

// const ReactElement = {  // task - render a tag in a browser
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google '
// }

const anotherElement = (
  <a href='https://google.com' target='_blank'>visit google</a>
)
const anotherUser = "rahul Kumar"
const reactElement = React.createElement(
  'a',
  {href: 'http://google.com', target: '_blank'},
  'click google ',
  anotherUser
)

createRoot(document.getElementById('root')).render(


      reactElement

)
