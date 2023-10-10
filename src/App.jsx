import './styles/App.css';
import { Routes, Route, Link } from 'react-router-dom';
import New from './New';
import Comentar from './Comentar';
import { useState, useEffect } from 'react';

function Inicio() {
  const [publicaciones, setPublicaciones] = useState([]);

  useEffect(() => {
    const publicacionesGuardadas = JSON.parse(localStorage.getItem('publicaciones')) || [];
    setPublicaciones(publicacionesGuardadas);
  }, []);

  const handleAgregarPublicacion = (nuevoPost) => {
    setPublicaciones([...publicaciones, nuevoPost]);
    localStorage.setItem('publicaciones', JSON.stringify([...publicaciones, nuevoPost]));
  };

  return (
    <>
      <div id='SearchBar'>
        <nav id='links'>
          <ul>
            <li><Link className='inicio' to='/'>Inicio</Link></li>
            <li><Link className='New' to='/new'>New</Link></li>
          </ul>
        </nav>
      </div>
      <hr />
      <div>
        {publicaciones && publicaciones.length > 0 ? (
          publicaciones.map((publicacion) => (
            <div key={publicacion.id} className='publicacion'>
              <h4>{publicacion.usuario}</h4>
              <h3>
                <Link to={`/post/${publicacion.id}`}>
                  {publicacion.titulo}
                </Link>
              </h3>
              <p>{publicacion.contenido}</p>
            </div>
          ))
        ) : (
          <h4>No hay Publicaciones</h4>
        )}
      </div>
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path='/' element={<Inicio />} />
      <Route path='/post/:id' element={<Comentar />} />
      <Route path='/new' element={<New />} />
    </Routes>
  );
}

export default App;