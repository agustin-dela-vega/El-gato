import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import './index.css'
// Para poder renderizar se necesita un tronco de donde partir, en este caso es root
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <App />
)
