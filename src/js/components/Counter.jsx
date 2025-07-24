import React, { useEffect, useState } from "react";

const Counter = ()=>{

    const [count,setCount] = useState(7)
    const [count2,setCount2] = useState(20)

    // pajuo, copuchento, chismoso
    // useEffect( que voy ahcer, a quien voy a mirar)
    // useEffect( funcion callback, elemento a rastrear)
    useEffect(()=>{
        console.log('count cambio')
    },[count])

    useEffect(()=>{
        console.log('count2 cambio')
    },[count2])

     useEffect(()=>{
        console.log('count o count2 cambio')
    },[count2, count])

    useEffect(()=>{
        console.log('cuando me ejecuto')
    },[])


    return(
        <>
            <h1>Counter</h1>
            <p>El valor de count es: {count}</p>
            <button onClick={()=>setCount(count + 1)}>agregar</button>
             <p>El valor de count es: {count2}</p>
            <button onClick={()=>setCount2(count2 - 1)}>quitar</button>
        </>
    )
}

export default Counter