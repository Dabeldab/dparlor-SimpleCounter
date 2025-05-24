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
let counter ;
let chosenColor 
let timer;
let go;

//Random color selector
const  randoColor =() => {
const color = ['red','blue','green','purple','white','yellow','cyan','orange','pink','gold','brown','gray']
return chosenColor= color[Math.floor(Math.random() * color.length)]
}

//Interval
const startTimer = () => {
  counter = 0
  timer = setInterval(() => {
    
    counter++;
    chosenColor = randoColor();
    if (counter === 10) alert("10 is a cool number") 
    root.render(<Home counter={counter} chosenColor={chosenColor} onReset={reset} onStop={stop} onStart={startTimer} onCountdown={countDown}/>);
  }, 1000);
}

  // Reset function
const reset = () => {
  counter = 0;
    root.render(<Home counter={counter} chosenColor={chosenColor} onReset={reset} onStop={stop} onStart={startTimer} onCountdown={countDown}/>);
}

const countDown = () => {
  console.log("triggered countdown")
 stop()
  counter = 5
  go = setInterval(() => {
    counter -= 1
    if (counter == 0) {stop(); alert("Time is up")}
         
    root.render(<Home counter={counter} chosenColor={chosenColor} onReset={reset} onStop={stop} onStart={startTimer} onCountdown={countDown}/>);
  }, 1000)
}

// Stop function
const stop = () => {
  if (timer) clearInterval(timer);
  if (go) clearInterval(go)
  root.render(<Home counter={counter} chosenColor={chosenColor} onReset={reset} onStop={stop} onStart={startTimer} onCountdown={countDown}/>);

}

startTimer()