import React from 'react'

// Navbar Component
import Navbar from './components/Navbar'

// React Router Components
import { Route, Routes } from 'react-router-dom'

// Pages
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import Profile from './pages/Profile'
import CreatePost from './pages/CreatePost'

const App = () => {
  return (
    <>
      
      {/* Common Navbar displayed on all pages */}
      <Navbar />

      {/* Application Routes */}
      <Routes>

        {/* Route for creating a new post */}
        <Route path='/create-post' element={<CreatePost />} />

        {/* Route for user profile page */}
        <Route path='/profile' element={<Profile />} />

        {/* Home Page Route */}
        <Route path='/' element={<Home />} />

        {/* User Registration Page */}
        <Route path='/register' element={<Register />} />

        {/* User Login Page */}
        <Route path='/login' element={<Login />} />

      </Routes>
    </>
  )
}

export default App