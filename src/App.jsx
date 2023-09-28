import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Inicio from './Inicio'
import Publicaciones from './Publicaciones'
import New from './New'
import { useState, useEffect } from 'react'

function App() {

  return (
  <>
  <header>
  <div id='SearchBar'>
      <nav id= "links">
        <ul>
          <li><Link className="inicio" to="/">Inicio</Link></li>
          <li><Link className="publicaciones" to="/Publicaciones">Publicaciones</Link></li>
          <li><Link className='New' to="/new">New</Link></li>
        </ul>
      </nav>
    </div>
    <hr/>
  </header>
    <main>
      {/* Aca va el cuerpo del Blog(los posteos/publicaciones) */}
    </main>
    <footer>
      {/* aca va el "pie" de la pagina (opcional) */}
    </footer>
    <Routes>                                                                          
      <Route path="/" element={<Inicio />}></Route>                                     
      <Route path="/publicaciones" element={<Publicaciones />}></Route>
      <Route path="/New" element={<New />}></Route>
    </Routes>
    </>
  )
}
export default App
