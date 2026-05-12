import React from 'react'
import { Link } from 'react-router-dom'
import API from '../Api'

const Navbar = () => {
  const logout = async () => {
    await API.post("/auth/logout");
    window.location.href = "/login";
  }
  return (
    <div className='broder-b p-4 flex justify-between items-center bg-white'>
        <h1 className='font-bold text-xl'>InstaClone</h1>
         <div className=' flex justify-between items-center space-x-4'>
            <Link className='hover:text-blue-500' to="/">HOME</Link>
            <Link className='hover:text-blue-500' to="/profile">MY POST</Link>
            <Link className='hover:text-blue-500' to="/create-post">CREATE POST</Link>
            <Link className='hover:text-blue-500' to="/login">LOGIN</Link>
            <Link className='hover:text-blue-500' to="/register">REGISTER</Link>
            <button onClick={logout} className='hover:text-red-500'>LOGOUT</button>

         </div>
    </div>
  )
}

export default Navbar