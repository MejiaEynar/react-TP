import { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import Markdown from 'react-markdown'
// import remarkGfm from 'remark-gfm'
import './styles/New.css'

function New(){
    const [ text, setText] = useState('');
    const [ autor, setAutor ] = useState('');
    const [ titulo, setTitulo ] = useState('');
    const [ posts, setPosts ] = useState([]);

    useEffect(() => {
      let postsGuardados = JSON.parse(localStorage.getItem('posts'));
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
      localStorage.setItem('posts', JSON.stringify(PostActualizado));
      setAutor('');
      setTitulo('');
      setText('');
    }

    return(
    <>
    <div id='New-main'>
        <h1>Nuevo Post</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" value={autor} onChange={(e) =>{setAutor(e.target.value)}} placeholder='Autor'/>
            <input type="text" value={titulo} onChange={(e) =>{setTitulo(e.target.value)}} placeholder='Titulo'/>
            <textarea 
                onChange={(e) => setText(e.target.value)}
                value={text}
                placeholder='Escribir... '/>
            <input type="submit" value="Postear" />
            {/* <div id='Posteos'>
            <Markdown remarkPlugins={[remarkGfm]}>{text}</Markdown>
            <pre>
            {posts.map((autor,titulo,text, i) => {
                <ul>
                    <h1 key={i}> {titulo} </h1>
                    <h3 key={i}> {autor} </h3>
                    <p key={i}> {text} </p>
                </ul>
            })}
            </pre>
            </div> */}
        </form>
    </div>
    </>
 )
}

export default New