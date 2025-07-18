import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
import Cart from './components/Cart';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Cart cantidad={3}  />
  </React.StrictMode>,
)
