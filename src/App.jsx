
import './styles/App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Publicaciones from './Publicaciones'
import Inicio from './Inicio';

function App() {
  return (
    <>
      <Routes id="rutas">
        <Route path="/" element={<Inicio />} publicaciones={(agregarPublicacion)} />
      </Routes>
    </>
  );
}

export default App
