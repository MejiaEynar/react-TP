import { useState } from 'react'
import './styles/New.css'

function New(){
  
    return(
    <>
        <h1>Nuevo Post</h1>
        <form>
            <input type="text" placeholder='Autor'/>
            <input type="text" placeholder='Titulo'/>
            <textarea placeholder='Escribir... '/>
            <div id='Boton'>
                <input type="submit" value="Postear" />
            </div>
        </form>
    </>
 )
}

export default New