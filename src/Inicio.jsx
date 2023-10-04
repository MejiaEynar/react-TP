import { Link, Routes, Route } from 'react-router-dom';
import Publicaciones from './Publicaciones';
import Comentar from "./Comentar";
import {useState, useEffect} from 'react'
function Inicio(agregarPublicacion) {
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
  function handleClick() {
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
    }
  }
  return (
<>
    <div>
      <h1>Blog</h1>
      <p>Navega a través de este blog</p>
      <ul>
        <li><Link className="publicaciones" to="/Publicaciones">Ir a Publicaciones</Link></li>
      </ul>
      <Routes>
        <Route path="/Publicaciones" element={<Publicaciones />} agregarPublicacion={(agregarPublicacion)}/>
      </Routes>
    </div>
          <div id="publicaciones">
          {publicaciones && publicaciones.length < 0 ? (publicaciones.map((publicacion, index) => (
            <div key={publicacion.id} className="publicacion">
              <h4>{publicacion.nombreUsuario}</h4>
              <h3>{publicacion.titulo}</h3>
              <p>{publicacion.contenido}</p>
              <Comentar publicacion={publicacion} 
              comentarios={comentariosPorPublicacion[publicacion.id]} 
              setComentarios={setComentariosPorPublicacion} />
            </div>
          ))
          )
          :
          (
              <h4>No hay Publicaiones</h4>
          )}
        </div>
</>
  );
}
export default Inicio