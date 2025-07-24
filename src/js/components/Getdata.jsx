import React, { useEffect, useState } from "react";

const Getdata = ()=>{

    const [characters, setCharacters] = useState([])
    const [frutas, setFrutas] = useState([{name: 'pera'},{name: 'pera'}, {name: 'pera'}])

    function getCharacters(){
        console.log('getCharacters')
        fetch('https://rickandmortyapi.com/api/character')
        .then((response)=> response.json()) 
        // .then( (data)=> console.log(data.results))
        .then( (data)=> setCharacters(data.results))
    }

    useEffect(()=>{
        console.log('se cargo la pagina')
        getCharacters()

    },[])

    return(
        <>
            <h1>Getdata</h1>


            {characters.map( (personaje)=> 
                <p key={personaje.id}>
                      {personaje.id} { personaje.name}
                      y es de la especi { personaje.species}
                      
                    <img src={ personaje.image} alt=""  />      
                </p> 
                
                )}
        </>
    )
}

export default Getdata