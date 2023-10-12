import './styles/App.css';
import { Routes, Route, Link } from 'react-router-dom';
import New from './New';
import Admin from './Admin';
import Comentar from './Comentar';
import { useState, useEffect } from 'react';

function Inicio(props) {
  const [publicaciones, setPublicaciones] = useState([]);

  useEffect(() => {
    const publicacionesGuardadas = JSON.parse(localStorage.getItem('publicaciones')) || [];
    setPublicaciones(publicacionesGuardadas);
  }, []);

  const handleAgregarPublicacion = (nuevoPost) => {
    setPublicaciones([...publicaciones, nuevoPost]);
    localStorage.setItem('publicaciones', JSON.stringify([...publicaciones, nuevoPost]));
  };

const borrarPublicaciones = (id) => {
setPublicaciones(publicaciones.filter((contenido, index) => index != id))
}
const handleClick = e => {
  borrarPublicaciones(e.target.id)
}
const {admin} = props;
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
      <div>
      {admin && <h3>Sos ADMIN, hace lo que se te canta el orto REY</h3>}
        {publicaciones && publicaciones.length > 0 ? (
          publicaciones.map((publicacion) => (
            <div key={publicacion.id} className='publicacion'>
              <h4>{publicacion.usuario}</h4>
              <h3>
                <Link to={`/post/${publicacion.id}`}>
                  {publicacion.titulo}
                  {admin && <button id={publicacion.id} onClick={handleClick}></button>}
                </Link>
              </h3>
              <p>{publicacion.contenido}</p>
            </div>
          ))
        ) : (
          <h4>No hay Publicaciones</h4>
        )}
        {admin && <h3>Sos ADMIN, hace lo que se te canta el orto REY</h3>}
      </div>
    </>
  );
}

function App() {
  const [admin, setAdmin] = useState(false)
  return (
    <Routes>
      <Route path='/' element={<Inicio admin={admin}/>} />
      <Route path='/post/:id' element={<Comentar />} />
      <Route path='/new' element={<New />} />
      <Route path='/admin' element={<Admin setAdmin={setAdmin}/>} />
    </Routes>
  );
}

export default App;