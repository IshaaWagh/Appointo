import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AdminContextProvider from './context/AdminContext.jsx'
import AppContextProvider from './context/AppContext.jsx'
import BankerContextProvider from './context/BankerContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AdminContextProvider>
      <BankerContextProvider>
        <AppContextProvider>
          <App />
        </AppContextProvider>
      </BankerContextProvider>
    </AdminContextProvider>
  </BrowserRouter>,
)
