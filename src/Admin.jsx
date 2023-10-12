import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./styles/Admin.css";

function Admin (props) {
const {setAdmin} = props;
const Navigate = useNavigate()
const [contraseña, setContraseña] = useState ('')
const handleSubmit = e => {
    e.preventDefault()
    if(contraseña == 'kakas'){
        setAdmin(true)
        Navigate('/')
    }
}

return (
    <>
    <h1 className='admin-h1'>¿Te atreves a ser ADMIN?</h1>
<form onSubmit={handleSubmit}>
<input onChange={e => setContraseña(e.target.value)}type="password" value={contraseña}/>
<button type="submit">Entrar</button>
</form>
    </>
)
}
export default Admin