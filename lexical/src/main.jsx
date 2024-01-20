import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import LexicalAnalyzer from './components/LexicalAnalyzer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LexicalAnalyzer></LexicalAnalyzer>
  </React.StrictMode>,
)
