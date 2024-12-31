import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-center'>
        <h1 className='text-3xl'>Hello! 👋 <br />  <span className='text-5xl font-semibold'> Anish</span> </h1>    
        <button className='bg-orange-600 rounded-lg px-5 py-2'>LogOut</button>
    </div>
  )
}

export default Header