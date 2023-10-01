import './styles/App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Inicio from './Inicio'
import Publicaciones from './Publicaciones'
import New from './New'
// import { useState, useEffect } from 'react'

function App() {

  return (
  <>
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
    <Routes>                                                                          
      <Route path="/inicio/*" element={<Inicio />}></Route>                                     
      <Route path="/publicaciones/*" element={<Publicaciones />}></Route>
      <Route path="/new/*" element={<New />}></Route>
    </Routes>
  </>
  )
}
export default App
