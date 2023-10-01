import { useState, useEffect } from "react"
import Inicio from "./Inicio";
import { Routes, Route, Link } from 'react-router-dom'

function Publicaciones() {

    const [contenido, setContenido] = useState('');
    const [publicaciones, setPublicaciones] = useState([]);

    useEffect(() => {
        const publicacionesGuardadas = JSON.parse(localStorage.getItem('publicaciones')) || []
        setPublicaciones(publicacionesGuardadas)
    }, [])

    function handleClick() {
        const nuevaPublicaciones = {
            nombreUsuario: 'Pepe Perez',
            contenido: contenido
        }
        setPublicaciones([...publicaciones, nuevaPublicaciones]);
        localStorage.setItem('publicaciones', JSON.stringify([...publicaciones, nuevaPublicaciones]))
        console.log(publicaciones)
        setContenido('')
    }

  return (
    <>
        <ul>
            <li><Link to="/Inicio">ir a Inicio</Link></li>
        </ul>
            <Routes>
                <Route path="/Publicaciones/*" element={<Inicio />} />
            </Routes>
        <div id="post">
            <textarea
            id="content"
            onChange={(e) => {setContenido(e.target.value)}}
            placeholder="¿Que estas pensando?"
            >
            </textarea>
            <input type="button" value="Publicar" onClick={handleClick}></input>
        </div>
        <div id="publicaciones">
            {
                publicaciones.map((publicacion, index) => (
                    <div key={index}>
                        <Inicio nombreUsuario={publicacion.nombreUsuario} contenido={publicacion.contenido}/>
                    </div>
                ))
            }
        </div>
    </>
  )
}

export default Publicaciones