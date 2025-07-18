import React, { useState } from "react";

const Cart = ({cantidad = 0})=>{

    const [items , setItems] = useState(cantidad)
    const [addItems , setAddItems] = useState(1)

    function add(){
        console.log('add')
        setItems(addItems + items)
    }

    function clear(){
        console.log('clear')
        setItems(0)
    }

    
    return(
        <>
            <div className="text-center">
                <h3 className="text-center mt-5">
                    {items}
                <i className="bi bi-cart4"></i>
                </h3>
            </div>


            <div className="card" style={{width: "19rem"}}>
                <img src="https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png?f=webp&w=256" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Aprende React</h5>
                    <p className="card-text">Libro aprende React , en este libro aprenderas sobre componenentes, class, props y hooks, especialmente el useState</p>
                    <button onClick={()=>{
                        if(addItems > 1){
                            setAddItems(addItems - 1)
                        }
                        }} >-</button>
                    <input type="number" value={addItems}  />
                    <button onClick={()=>setAddItems(addItems + 1)}   >+</button>
                    <a onClick={add}  href="#" className="btn btn-primary">Agregar al carrito</a>
                </div>
            </div>

            <div className="text-center">
                <a onClick={()=>setItems(0)}  href="#" className="btn btn-danger">Limpiar carrito</a>
            </div>


        </>
    )
}

export default Cart