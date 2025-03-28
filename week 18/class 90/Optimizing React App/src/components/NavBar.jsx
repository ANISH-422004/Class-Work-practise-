import React from 'react'
import {Link} from 'react-router-dom'
const NavBar = () => {
  return (
    <div className='w-full h-16 bg-gray-800 flex justify-center items-center gap-4'>

        <Link to='/' className='text-white'>Page1(Home)</Link>
        <Link to='/page2' className='text-white'>Page2</Link>

    </div>
  )
}

export default NavBar