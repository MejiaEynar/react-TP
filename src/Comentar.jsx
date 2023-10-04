import { useState, useEffect } from 'react';

function Comentar({ contenido, publicacionId }) {
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [comentario, setComentario] = useState('');
  const [comentarios, setComentarios] = useState([]);

  useEffect(() => {
    const comentariosGuardados = JSON.parse(localStorage.getItem(`comentarios_${publicacionId}`)) || [];
    setComentarios(comentariosGuardados);
  }, [publicacionId]);

  function handleComentar() {
    if (nombreUsuario && comentario) {
      const nuevoComentario = {
        nombreUsuario,
        comentario,
      };

      // Obtén los comentarios existentes para esta publicación
      const comentariosPublicacion = comentarios[publicacionId] || [];
      
      // Actualiza los comentarios para esta publicación
      const comentariosActualizados = [...comentariosPublicacion, nuevoComentario];

      // Actualiza el objeto de comentarios con los comentarios para esta publicación
      const comentariosActualizadosGlobal = {
        ...comentarios,
        [publicacionId]: comentariosActualizados,
      };

      localStorage.setItem(`comentarios_${publicacionId}`, JSON.stringify(comentariosActualizados));

      setComentario('');
      setNombreUsuario('');
      setComentarios(comentariosActualizadosGlobal);
    }
  }

  return (
    <>
      <div>
        <div id="main-publicacion">
          <main>
            <section>
              <p id="contenido">{contenido}</p>
            </section>
            <section id="comentarios">
              <input
                type="text"
                value={nombreUsuario}
                onChange={(e) => setNombreUsuario(e.target.value)}
                placeholder='Nombre de usuario'
              />
              <textarea
                onChange={(e) => setComentario(e.target.value)}
                placeholder='Comenta algo'
                value={comentario}
              ></textarea>
              <input type="button" onClick={handleComentar} value='Comentar' />
              <p>Comentarios</p>
              {comentarios[publicacionId]?.map((comentario, index) => (
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