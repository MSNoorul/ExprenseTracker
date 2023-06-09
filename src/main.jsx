import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import AppcontextProvider from './context/Appcontext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppcontextProvider> <App /></AppcontextProvider>
  </React.StrictMode>,
)
