import React from 'react';
import ReactDOM from 'react-dom/client';

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// index.css'
import '../styles/index.css'
// components
import Home from './components/Home';

const root = ReactDOM.createRoot(document.getElementById('root'))
let counter = 0;
let chosenColor 
let timer;

//Random color selector
const  randoColor =() => {
const color = ['red','blue','green','purple','white','yellow','cyan','orange','pink','gold','brown','gray']
return chosenColor= color[Math.floor(Math.random() * color.length)]
}

//Interval
const startTimer = () => {
  timer = setInterval(() => {
    counter++;
    chosenColor = randoColor();
    root.render(<Home counter={counter} chosenColor={chosenColor} onReset={reset} onStop={stop} onStart={startTimer}/>);
  }, 1000);
}

  // Reset function
const reset = () => {
  counter = 0;
    root.render(<Home counter={counter} chosenColor={chosenColor} onReset={reset} onStop={stop} onStart={startTimer}/>);

}

// Stop function
const stop = () => {
  clearInterval(timer);
    root.render(<Home counter={counter} chosenColor={chosenColor} onReset={reset} onStop={stop} onStart={startTimer}/>);

}

startTimer()