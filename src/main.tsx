import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'
import './scss/styles.scss'

const dom: any = document.getElementById('root')
ReactDOM.createRoot(dom).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
