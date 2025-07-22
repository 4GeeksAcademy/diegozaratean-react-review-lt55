import React, { useState } from "react";

const Series = ()=>{
    
    const [seriesFavoritas, setSeriesFavoritas] = useState(['you','game of thrones','two and half men','vikings','sopranos','game of thrones'])
    let nombre = 'diego'
    let nueva =  'breaking bad'

    function add(){
        console.log('add')
        console.log(seriesFavoritas)
        // seriesFavoritas.push(nueva)
        setSeriesFavoritas([...seriesFavoritas,nueva])
        console.log(seriesFavoritas)
    }

    return(
        <>
            <h1>Mis Series favoritas</h1>
            <p>{nombre}</p>
            {seriesFavoritas}

            {seriesFavoritas.map( (elemento,index)=> <div key={index}> serie {index + 1}: {elemento} </div> )}

            <button onClick={add}>agregar elemento</button>
        </>
    )
}

export default Series


// PSEUDOCODIGO
// DONE: crear un array de tareas
// DONE: agregar una nueva tarea
// eliminar una tarea
// DONE: contar las tareas que hay 
// DONE: mostrar un array de tareas
// parte grafica
// DONE: obetenr el valor de input, 
// DONE:identificar cuando doy enter
// cuando hago hover sobre una tarea mostrar el botron de eliminar

