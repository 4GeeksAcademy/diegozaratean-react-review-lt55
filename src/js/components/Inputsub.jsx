import React, { useState } from "react";

const Inputsub = ()=>{

    const [entrada, setEntrada] = useState('')

    function envio(e){
        e.preventDefault()
        console.log('envio')
        console.log("OPRIMISTE ENTER")
            console.log("la tarea a agrear es: " + entrada)
            setEntrada('')
    }
  
    return(
        <>
            <h1>Inputsub</h1>
            <form onSubmit={envio} >
                <input name="tarea" type="text"  value={entrada} onChange={ (e)=> setEntrada(e.target.value) }  />
            </form>
            <p> el valor ingresado es {entrada} </p>
        </>
    )
}

export default Inputsub