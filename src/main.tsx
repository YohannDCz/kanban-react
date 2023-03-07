import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'
import './scss/styles.scss'

const root: any = document.getElementById('root')
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
