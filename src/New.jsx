import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import './styles/New.css'

function New(){
    const [ text, setText] = useState('');
    const [ autor, setAutor ] = useState('');
    const [ titulo, setTitulo ] = useState('');
    const [ posts, setPosts ] = useState([]);

    useEffect(() => {
      let postsGuardados = JSON.parse(localStorage.getItem('Posts'));
      if (postsGuardados) setPosts(postsGuardados);
    }, []);
    function handleSubmit(e) {
        console.log(posts)
      e.preventDefault();
      const nuevoPost = {
          Autor: autor,
          Titulo: titulo,
          Texto: text,
      }
    //   setPosts([...posts, nuevoPost]);
      let PostActualizado = [...posts, nuevoPost];
      setPosts(PostActualizado);
      localStorage.setItem('Posts', JSON.stringify(PostActualizado));
      setAutor('');
      setText('');
    }

    return(
    <>
        <h1>Nuevo Post</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" value={autor} onChange={(e) =>{setAutor(e.target.value)}} placeholder='Autor'/>
            <input type="text" value={titulo} onChange={(e) =>{setTitulo(e.target.value)}} placeholder='Titulo'/>
            <textarea 
                onChange={(e) => setText(e.target.value)}
                value={text}
                placeholder='Escribir... '/>
            <input type="submit" value="Postear" />
            <div>
            {/* <Markdown remarkPlugins={[remarkGfm]}>{text}</Markdown> */}
            </div>
        </form>
    </>
 )
}

export default New