import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './views/home'
import './styles/fuentes.css'
import './styles/global.css'
import { BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux' 
import store from './redux/store'
import { FooterContainer } from './styles/style-components/stylo-home'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: "#f7f7f7" }}>
        <Provider store={store}>
          <BrowserRouter>
            <Home/>  
          </BrowserRouter>
        </Provider>
        <FooterContainer>
          <footer style={{ 
            display: 'flex',
            marginBottom: "0px",
            paddingBottom: "1px", 
            justifyContent: 'center', 
            alignItems: 'center', 
            padding: '10px',
            backgroundColor: '#333', 
            textAlign: 'center'
          }}>
              Designed by <b style={{paddingLeft: "4px", paddingRight: "4px"}}>Juan Pablo Del Rosso </b>© 2024
        </footer>
      </FooterContainer>
    </div>
   
  </React.StrictMode>
)

