import React, { useReducer, useState } from "react";
import { counterReducer } from "./counterReducer";



const Reducer = ()=>{

    const [count,setCount] = useState(7)

    const [ state, dispatch ] = useReducer(counterReducer, {count: 0, message:'tu no cambiado'})
   
    return(
        <>
            <h1>Reducer</h1>
            <p>El valor de count es: {count}</p>
            <button onClick={()=>setCount(count + 1)}>agregar</button>

            <p>El valor del estado  es: {state.count}</p>
            <h1>{state.message}</h1>
            <button onClick={()=>dispatch( { type: 'increment'} )}>agregar</button>
            <button onClick={()=>dispatch( { type: 'decrement'} )}>quitar</button>
        </>
    )
}

export default Reducer