// Code EyesOnMe Component Here
import React from 'react';

function EyesOnMe(){

    function letsFocus(e){
        console.log("Good!")
    }

    function letsBlur(e){
        console.log("Hey! Eyes on me!")
    }

    return(
        <button onFocus={letsFocus} onBlur={letsBlur}>Eyes on me</button>
    )
}

export default EyesOnMe;
