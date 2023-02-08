import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
// import { Padre } from './07-tarea-memo/Padre'
// import HooksApp from './HooksApp'
// import './08 - useReducer/intro-reducer';
// import TodoApp from './08 - useReducer/TodoApp';
import MainApp from './09-useContext/MainApp';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  {/* // <React.StrictMode> */}
    <MainApp />
  {/* // </React.StrictMode>, */}
  </BrowserRouter>
)
