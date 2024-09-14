import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'


import Todo from './component/todo/todo.jsx'
import Login from './component/login/Login.jsx'
import Home from './component/home/Home.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
   
      <Routes>
      <Route path='/' element={<Login />}></Route>
        <Route path='/Home' element={<Home />}></Route>
        <Route path='/Todo' element={<Todo />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)