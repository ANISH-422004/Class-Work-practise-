import React from 'react'

const   Header = ({changeuser}) => {


  const HandelLogout = ()=>{
    // console.log("loggedout");
    localStorage.setItem('loggedinuser',"")
    // window.location.reload()
    changeuser('')        
  }
  
  return (
    <div className='flex justify-between items-center'>
        <h1 className='text-3xl'>Hello! 👋 <br />  <span className='text-5xl font-semibold'>Admin</span> </h1>    
        <button
          onClick={()=>{HandelLogout()}}
        className='bg-orange-600 rounded-lg px-5 py-2'>LogOut</button>
    </div>
  )
}

export default Header