import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function Comentar() {
  const { id } = useParams();

  const [nombreUsuario, setNombreUsuario] = useState('');
  const [comentario, setComentario] = useState('');
  const [comentarios, setComentarios] = useState([]);
  const [publicacion, setPublicacion] = useState([]);

  useEffect(() => {
    const publicacionGuardada = JSON.parse(localStorage.getItem(`publicacion_${id}`)) || null;
    setPublicacion(publicacionGuardada);
    
    const comentariosGuardados = JSON.parse(localStorage.getItem(`comentarios_${id}`)) || [];
    setComentarios(comentariosGuardados);
  }, [id]);

  function handleComentar() {
    if (nombreUsuario && comentario) {
      const nuevoComentario = {
        nombreUsuario: nombreUsuario,
        comentario: comentario,
      };

      const comentariosPublicacion = comentarios || [];
      const comentariosActualizados = [...comentariosPublicacion, nuevoComentario];

      localStorage.setItem(`comentarios_${id}`, JSON.stringify(comentariosActualizados));

      setComentario('');
      setNombreUsuario('');
      setComentarios(comentariosActualizados);
    }
  }

  return (
    <>
      <div>
        <div>
          <ul>
            <li>
              <Link className="inicio" to="/">Inicio</Link>
            </li>
          </ul>
        </div>
        {publicacion && publicacion.length != 0 ? (
          <div key={publicacion.id} className="publicacion">
            <h4>{publicacion.usuario}</h4>
            <h3>{publicacion.titulo}</h3>
            <p>{publicacion.contenido}</p>
          </div>
        ) : (
          <p>Publicación no encontrada</p>
        )}
        <div id="main-publicacion">
          <main>
            <section id="comentarios">
              <input
                type="text"
                value={nombreUsuario}
                onChange={(e) => setNombreUsuario(e.target.value)}
                placeholder="Nombre de usuario"
              />
              <textarea
                onChange={(e) => setComentario(e.target.value)}
                placeholder="Comenta algo"
                value={comentario}
              ></textarea>
              <input type="button" onClick={handleComentar} value="Comentar" />
              <p>Comentarios</p>
              {comentarios.map((comentario, index) => (
                <div key={index}>
                  <p>{comentario.nombreUsuario}</p>
                  <p>{comentario.comentario}</p>
                </div>
              ))}
            </section>
          </main>
        </div>
      </div>
    </>
  );
}

export default Comentar;