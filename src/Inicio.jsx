import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Publicaciones from './Publicaciones'
import New from './New'

function Inicio({nombreUsuario, contenido}){

    const [comentario, setComentario] = useState('')
    const [comentarios, setComentarios] = useState([])

    function handleComentar() {
        setComentarios([...comentarios, comentario])
        setComentario('')
    }

    return (
    <>
        <nav id= "links">
            <ul>
                <li><Link className="publicaciones" to="/Publicaciones">Publicaciones</Link></li>
                <li><Link className='New' to="/new">New</Link></li>
            </ul>
        </nav>
            <Routes>
                <Route path="/publicaciones/*" element={<Publicaciones />}></Route>
                <Route path="/new/*" element={<New />}></Route>
            </Routes>
        <div>
            <div id="main-publicacion">
                <header>
                    <p id="nombre-usuario">{nombreUsuario}</p>
                </header>
                <main>
                    <section>
                        <p id="contenido">{contenido}</p>
                    </section>
                    <section id="comentarios">
                        <textarea onChange={(e) => setComentario(e.target.value)} placeholder='Comenta algo'></textarea>
                            <input type="button" onClick={handleComentar} value='Comentar'/>
                                <p>Comentarios</p>
                                {
                                    comentarios.map((comentario, index) => (
                                    <p key={index}>{comentario}</p>
                                ))
                                }
                    </section>
                </main>
            </div>
        </div>

    </>
    )
}


export default Inicio