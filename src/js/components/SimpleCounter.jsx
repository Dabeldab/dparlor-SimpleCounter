import React from "react"

const SimpleCounter = (prop) => {
    return(
        <>
        <div className="counter-display"> 
                        <button className="reset"onClick={prop.onReset}>Reset</button>

                <div className="clock-image">
                        <svg xmlns="http://www.w3.org/2000/svg" fill={prop.color} className="bi bi-clock" viewBox="0 0 16 16">
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
                        </svg>
                </div>

                <div className="analog-counter" >
                        <div  className="seconds thousands" >{prop.thousandsDigit}</div>
                        <div  className="seconds hundreds">{prop.hundredsDigit}</div>
                        <div  className="seconds tens">{prop.tensDigit}</div>
                        <div  className="seconds ones">{prop.onesDigit}</div>
                </div>
            
            <button id="btn" onClick={prop.onStop}>Stop</button>
        </div>
                        <button className="stop"onClick={prop.onStart}>Start</button>
                        <button className="countdown"onClick={prop.onCountdown}>Countdown</button>


        </>
)      
}


export default SimpleCounter;
