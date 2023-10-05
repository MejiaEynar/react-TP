import { useState } from 'react';
import "./styles/New.css"
import { Routes, Route, Link } from 'react-router-dom'
import Inicio from './Inicio';
function New(props) {
  const [contenido, setContenido] = useState('');
  const [usuario, setUsuario] = useState('');
  const [titulo, setTitulo] = useState('');
  const [publicaciones, setPublicaciones] = useState([]);

  function agregarPublicacion(nuevaPublicacion) {
    const publicacionesGuardadas = JSON.parse(localStorage.getItem('publicaciones')) || [];
    
    const publicacionesActualizadas = [...publicacionesGuardadas, nuevaPublicacion];

    setPublicaciones(publicacionesActualizadas);
    localStorage.setItem('publicaciones', JSON.stringify(publicacionesActualizadas));
  }

  function handleClick(e) {
    e.preventDefault();
    if (usuario && contenido) {
      const nuevaPublicacion = {
        id: Date.now(),
        usuario: usuario,
        titulo: titulo,
        contenido: contenido,
      };
      console.log(nuevaPublicacion)
      agregarPublicacion(nuevaPublicacion);
      setContenido('');
      setTitulo('');
      setUsuario('');
    }
  }

  return (
    <>
    <Routes>
        <Route path="/inicio/*" element={<Inicio />}></Route>
        </Routes>
        <div id='list'>
        <ul>
            <li><Link className="inicio" to="/">Inicio</Link></li>
        </ul>
        </div>
      <h1>Nuevo Post</h1>
      <form onSubmit={handleClick}>
        <div id="post">
          <input
            type="text"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            placeholder="Usuario"
          />
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            placeholder="Titulo"
          />
          <textarea
            id="content"
            value={contenido}
            onChange={(e) => setContenido(e.target.value)}
            placeholder="¿Qué estás pensando?"
          ></textarea>
          <input type="submit" value="Publicar" />
        </div>
      </form>
    </>
  );
}

export default New;