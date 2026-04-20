import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'

const App = () => {
  return (
   <>
   <Navbar/>
   <Routes>
    <Route path='/register' element={<Register/>} />
    <Route path='/login' element={<Login/>} />
   </Routes>
   </>
  )
}

export default App