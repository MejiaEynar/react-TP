// import Markdown from 'react-markdown'
// import remarkGfm from 'remark-gfm'
import './styles/New.css'
import {useState} from 'react'

function New(props){

    const [ contenido, setContenido] = useState('');
    const [ usuario, setUsuario ] = useState('');
    const [ titulo, setTitulo ] = useState('');
    const {agregarPublicacion} = props;
    function handleClick(e) {
      e.preventDefault();
      if (usuario && contenido) {
        const nuevaPublicacion = {
          id: Date.now(),
          nombreusuario: usuario,
          titulo: titulo,
          contenido: contenido,
        };
        console.log(nuevaPublicacion);
        agregarPublicacion(nuevaPublicacion);
        localStorage.setItem('publicaciones', JSON.stringify([...publicaciones, nuevaPublicacion]));
        setContenido('');
        setTitulo('');
        setUsuario('');
        console.log(nuevaPublicacion);
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