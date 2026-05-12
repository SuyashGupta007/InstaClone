import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import Profile from './pages/Profile'
import CreatePost from './pages/CreatePost'

const App = () => {
  return (
   <>
   <Navbar/>
   <Routes>
    <Route path='/create-post' element={<CreatePost/>} />
    <Route path='/profile' element={<Profile/>} />
    <Route path='/' element={<Home/>} />
    <Route path='/register' element={<Register/>} />
    <Route path='/login' element={<Login/>} />
   </Routes>
   </>
  )
}

export default App