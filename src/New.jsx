import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Inicio from './Inicio.jsx'
// import Markdown from 'react-markdown'
// import remarkGfm from 'remark-gfm'
import './styles/New.css'

function New(props){
    const [ contenido, setContenido] = useState('');
    const [ usuario, setUsuario ] = useState('');
    const [ titulo, setTitulo ] = useState('');
    const [ publicaciones, setPublicaciones ] = useState([]);
    const { agregarPublicacion } = props;
    function handleClick(e) {
        e.preventDefault();
        if (usuario && contenido) {
          const nuevaPublicacion = {
            id: Date.now(),
            nombreusuario: usuario ,
            titulo: titulo,
            contenido: contenido,
          };
          agregarPublicacion([...publicaciones, nuevaPublicacion]);
          localStorage.setItem('publicaciones', JSON.stringify([...publicaciones, nuevaPublicacion]));
          setContenido('');
          setTitulo('');
          setUsuario('');
        }
      }
    
      return (
        <>
          <form onSubmit={handleClick}>
            <div id="post">
              <input
                type="contenido"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                placeholder="usuario"
              />
              <input
                type="contenido"
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
 )
}

export default New