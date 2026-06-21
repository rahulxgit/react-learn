// main entry point for src(react)
import React from 'react'; //core foundational library
import ReactDOM from 'react-dom/client';  // this library is used for DOM manuplation and Implimantion for react web

import App from './App';  // import app function


const root = ReactDOM.createRoot(document.getElementById('root')); // react create a virtual DOM 
root.render(                                                        // render that DOM
  
    <App />
 
);

