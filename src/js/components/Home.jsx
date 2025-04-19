import React from "react";
import SimpleCounter from './SimpleCounter';



function calculateSeconds(aCounter, placeValue) {
    return Math.floor(aCounter / placeValue) % 10
}

const Home = ({counter,chosenColor= 'currentcolor'}) => {
    return(
        <>
        <SimpleCounter 
        thousandsDigit = {calculateSeconds(counter, 1000)}
        hundredsDigit = {calculateSeconds(counter, 100)}
        tensDigit = {calculateSeconds(counter, 10)}
        onesDigit = {calculateSeconds(counter, 1)}
        color ={chosenColor}
        />
        </>
    )
}

export default Home;