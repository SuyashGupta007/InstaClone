import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='broder-b p-4 flex justify-between items-center bg-white'>
        <h1 className='font-bold text-xl'>InstaClone</h1>
         <div className=' flex justify-between items-center space-x-4'>
            <h2>HOME</h2>
            <h2>MY POST</h2>
            <h2>CREATE POST</h2>
            <Link className='hover:text-blue-500' to="/login">LOGIN</Link>
            <Link className='hover:text-blue-500' to="/register">REGISTER</Link>
            <button className='hover:text-red-500'>LOGOUT</button>

         </div>
    </div>
  )
}

export default Navbar