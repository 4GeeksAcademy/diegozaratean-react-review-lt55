import React, { useState } from "react";

const Inputkey = ()=>{

    const [entrada, setEntrada] = useState('')

    function presioneTecla(e){
        console.log('presioneTecla')
        console.log(e.key)
        console.log(e.keyCode)
        if(e.keyCode == 13){
            console.log("OPRIMISTE ENTER")
            console.log("la tarea a agrear es: " + entrada)
            setEntrada('')
        }

    }

    return(
        <>
            <h1>Inputkey</h1>
            <input type="text" onKeyDown={presioneTecla} value={entrada} onChange={ (e)=> setEntrada(e.target.value) }  />
            <p> el valor ingresado es {entrada} </p>
        </>
    )
}

export default Inputkey