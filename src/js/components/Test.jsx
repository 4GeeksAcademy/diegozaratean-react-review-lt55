import React from "react";

const Test = ()=>{

    function getTasks(){
        console.log('getTasks')
        fetch('https://playground.4geeks.com/todo/users/rolo')
        .then( (response)=> response.json() )
        .then( (data)=> console.log(data.todos) )
    }

    function addTasks(){
        console.log('addTasks')
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "label": "tarea desde react ",
                "is_done": false
            })
        };
        fetch('https://playground.4geeks.com/todo/todos/rolo',requestOptions)
        .then( (response)=> response.json() )
        .then( (data)=> {
            console.log(data)
            // valido si la creo
            // llamo a la funcion de leer 
            getTasks()
        } )
    }

    function deleteTasks(){
        console.log('deleteTasks')

        const requestOptions = {
            method: "DELETE",
            redirect: "follow"
        };

        fetch("https://playground.4geeks.com/todo/todos/60", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))

       
    }
    return(
        <>
            <h1>Test</h1>
            <button onClick={getTasks}>Leer tareas</button>

            <button onClick={addTasks}>crear tarea</button>

            <button onClick={deleteTasks}>eliminar tarea</button>
        </>
    )
}

export default Test