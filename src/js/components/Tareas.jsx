import React, { useState } from "react";

const Tareas = ()=>{

    const [tasks, setTasks] = useState(['hacer la cama','comer','lavarse los dientes'])

    // let tasks = ['hacer la cama','comer','lavarse los dientes']
    let nuevaTarea = 'limpiar la casa'

    function agregarTarea(){
        console.log('agregarTarea');

        // console.log(tasks)
        // tasks.push(nuevaTarea)
        // console.log(tasks)
        setTasks([...tasks,nuevaTarea])
    }

    function nolopuedocreer(index){
        console.log('nolopuedocreer' + index)
    }
    return(
        <>
            <h1>Mis tareas</h1>
            <p>{tasks}</p>
            <ol>
                {tasks.map( (task, index)=> 
                    <li key={index}> {task}  <span className="nodeberiaestarhaciendoesto" onClick={()=>nolopuedocreer(index)}>x</span> </li>
                )}
            </ol>
            <button onClick={agregarTarea} >Agregar tarea</button>
            <p> hay {tasks.length } tareas</p>
        </>
    )
}

export default Tareas