import React from 'react'


const Form = ({setUser,users}) => {


  
  return (
    
    <div className='mt-10 flex justify-center items-center'>
                <form action="" className='flex gap-3' onSubmit={()=>setUser()}>
                            <input type="text" className='rounded-md px-2 py-1 font-semibold' placeholder='name'      onChange={(event)=>{setUser({...users , name : event.target.value })}}  />
                            <input type="text" className='rounded-md px-2 py-1 font-semibold' placeholder='email'     onChange={(event)=>{setUser({...users , email : event.target.value})}}   />
                            <input type="text" className='rounded-md px-2 py-1 font-semibold' placeholder='imageurl'  onChange={(event)=>{setUser({...users ,imgurl : event.target.value })}}   />
                            <input type="submit" className='bg-blue-400 p-1  text-white rounded-xl' />
                </form>
    </div>
  )
}

export default Form