import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './views/home'
import './styles/fuentes.css'

import { BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux' 
import store from './redux/store'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Provider store={store}>
        <BrowserRouter>
          <Home/>  
        </BrowserRouter>
      </Provider>
    </div>
    <footer style={{ marginTop: 'auto', backgroundColor: '#333', color: '#fff', textAlign: 'center', padding: '10px' }}>
          Derechos reservados © 2024
          </footer>
  </React.StrictMode>
)

