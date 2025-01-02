import React from 'react'

const   Header = ({changeuser,data}) => {

  console.log(data.firstname);
  

  const HandelLogout = ()=>{
    // console.log("loggedout");
    localStorage.setItem('loggedinuser',"")
    // window.location.reload()
    changeuser('')        
  }
  
  return (
    <div className='flex justify-evenly lg:justify-between items-center'>
        <h1 className=' lg:text-3xl '>Hello! 👋 <br />  <span className='text-3xl lg:text-5xl font-semibold'>{data.firstname}</span> </h1>    
        <button
          onClick={()=>{HandelLogout()}}
        className='bg-orange-600 rounded-lg px-2 py-1 lg:px-5 lg:py-2'>LogOut</button>
    </div>
  )
}

export default Header