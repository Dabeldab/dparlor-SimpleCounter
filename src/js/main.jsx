import React from 'react';
import ReactDOM from 'react-dom/client';

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// index.css'
import '/workspaces/dparlor-miamipt78-reactcounter/src/styles/index.css'

// components
import Home from './components/Home';

const root = ReactDOM.createRoot(document.getElementById('root'))
let counter = 0;
let chosenColor 

//Random color selector
 const  randoColor =() => {
  const color = ['red','blue','green','purple','white','yellow','cyan','orange','pink','gold','brown','gray']
  return chosenColor= color[Math.floor(Math.random() * color.length)]
}

//Interval
setInterval(() => {
  counter++
  let chosenColor = randoColor();
  
  root.render(<Home counter={counter} chosenColor={chosenColor}/>)
}, 1000)


