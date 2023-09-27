import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Inicio from './Inicio'
import Publicaciones from './Publicaciones'
import { useState, useEffect } from 'react'

function App() {

  return (
  <>
       <nav id= "links">
   <ul>
      <li><Link className="inicio" to="/">Inicio</Link></li>
   <li><Link className="publicaciones" to="/Publicaciones">Publicaciones</Link></li>
    </ul>
        </nav>

      <Routes>                                                                          
      <Route path="/" element={<Inicio />}></Route>                                     
      <Route path="/publicaciones" element={<Publicaciones />}></Route>
    </Routes>                                                                           
                                                                          
    </>
  )
}
export default App
