import { useState } from 'react'
import './styles/New.css'

function New(){
  
    return(
    <>
    <div id='Formulario'>
        <h1>Nuevo Post</h1>
        <form>
            <input type="text" placeholder='Autor'/>
            <input type="text" placeholder='Titulo'/>
            <textarea/>
            <div id='Boton'>
                <input type="submit" value="Postear" />
            </div>
        </form>
    </div>   
    </>
 )
}

export default New