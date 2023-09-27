import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Inicio from './Inicio.jsx'
import Publicaciones from './Publicaciones'
import './index.css'
import { 
  BrowserRouter, 
  Routes, 
  Route 
} from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<App />} />
        <Route exact path='/Inicio' element={<Inicio />} />
        <Route exact path='/Publicaciones' element={<Publicaciones />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
