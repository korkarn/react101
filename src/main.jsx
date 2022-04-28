import React from 'react'
import ReactDOM from 'react-dom/client'
import Workshop from './workshop/Workshop'
import Assignment from './assignment/todo'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Workshop/> */}
    <Assignment/>
  </React.StrictMode>
)
