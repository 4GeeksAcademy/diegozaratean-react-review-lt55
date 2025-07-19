import React, { useState } from "react";

const Form = ()=>{

    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')

    const [backLabel, setBackLabel] = useState('')
    

    
    return(
        <>        
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="name"  value={name}  onChange={e=>{setName(e.target.value)}}/>
            </div>

             <div className="mb-3">
                <label htmlFor="apellido" className={"form-label " + backLabel}>Apellido</label>
                <input type="text" className="form-control"  id="apellido" value={lastname} onChange={e => {
                    setLastname( e.target.value)
                    setBackLabel('bg-danger')
                    }} />
            </div>

            <p>Tu nombre completo es {name} {lastname}</p>
           
        </>
    )
}

export default Form
