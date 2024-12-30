import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='bg-black  text-white flex justify-between p-4 fixed w-full'>
        <NavLink className="flex gap-2 justify-center items-center" to="/">
          <img  className="w-5" src="https://ik.imagekit.io/sheryians/Sheryians_logo_EzwgcppnD" alt="" />
            <h1>Sheriyans</h1>
        </NavLink>
        <div className='flex gap-3'>
            <NavLink className="hover:scale-105 transition" to="./about" >About</NavLink>
            <NavLink className="hover:scale-105 transition" to="./kodr" >Kodr</NavLink>
            <NavLink className="hover:scale-105 transition" to="./courses" >Courses</NavLink>
        </div>
    </div>
  )
}

export default NavBar