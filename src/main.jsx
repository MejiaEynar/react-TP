import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import New from './New.jsx'
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
        <Route exact path='/new' element={<New />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
