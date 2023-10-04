import './styles/App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Inicio from './Inicio'
import New from './New'
import {useState, useEffect} from 'react'

function App() {
  const [publicaciones, setPublicaciones] = useState([]);
  useEffect(() => {
    const publicacionesGuardadas = JSON.parse(localStorage.getItem('publicaciones')) || [];
    setPublicaciones(publicacionesGuardadas);
    console.log(publicacionesGuardadas)
  }, []);

  function agregarPublicacion() {
    if (usuario && contenido) {
      const nuevaPublicacion = {
        id: Date.now(),
        nombreusuario: usuario ,
        titulo: titulo,
        contenido: contenido,
      };
      setPublicaciones([...publicaciones, nuevaPublicacion]);
      localStorage.setItem('publicaciones', JSON.stringify([...publicaciones, nuevaPublicacion]));
    }
  }

  return (
  <>
  <div id='SearchBar'>
      <nav id= "links">
        <ul>
          <li><Link className="inicio" to="/">Inicio</Link></li>
          <li><Link className='New' to="/new">New</Link></li>
        </ul>
      </nav>
    </div>
    <hr/>
    <div>
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
    <Routes>                                                                          
      <Route path="/inicio/*" element={<Inicio />}></Route>                                     
      <Route path="/new/*" element={<New agregarPublicacion={agregarPublicacion} />}></Route>
    </Routes>
  </>
  )
}
export default App