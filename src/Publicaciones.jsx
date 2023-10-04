import { useState, useEffect } from "react";
import { Routes, Route, Link } from 'react-router-dom';
import Comentar from "./Comentar";
import Inicio from './Inicio';

function Publicaciones() {
  const [usuario, setUsuario] = useState('');
  const [ titulo, setTitulo ] = useState('');
  const [contenido, setContenido] = useState('');
  const [publicaciones, setPublicaciones] = useState([]);
  const [comentariosPorPublicacion, setComentariosPorPublicacion] = useState({});

  useEffect(() => {
    const publicacionesGuardadas = JSON.parse(localStorage.getItem('publicaciones')) || [];
    setPublicaciones(publicacionesGuardadas);
    console.log(publicacionesGuardadas)
  }, []);
  function agregarPublicacion(nuevaPublicacion){
     setPublicaciones([...publicaciones, nuevaPublicacion])
     localStorage.setItem('publicaciones', JSON.stringify([...publicaciones, nuevaPublicacion]));
  }
  function handleClick(e) {
    e.preventDefault(); // Prevenir el envío del formulario
    if (usuario && contenido) {
      const nuevaPublicacion = {
        id: Date.now(), // Generamos un ID único para la publicación
        nombreUsuario: usuario,
        titulo: titulo,
        contenido: contenido,
      };
      setPublicaciones([...publicaciones, nuevaPublicacion]);
      localStorage.setItem('publicaciones', JSON.stringify([...publicaciones, nuevaPublicacion]));
      setContenido('');
      setUsuario('');
    }
  }

  return (
    <>
      <ul>
        <li><Link to="/Inicio">ir a Inicio</Link></li>
      </ul>
      <Routes>
        <Route path="/Inicio" element={<Inicio />} publicaciones={(agregarPublicacion)} />
      </Routes>
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

export default Publicaciones