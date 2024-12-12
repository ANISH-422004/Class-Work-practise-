import React from 'react'

const card = ({users}) => {
  return (
    
        <>
            {
                users.map((item,idx)=>{
                    return (
                        <div className='card h-[50%] w-32 bg-white rounded-xl flex flex-col gap-1 items-center' >
                        <div id="imgcontainer" className='w-[30%] aspect-square bg-red-300 rounded-full'>
                            <img src="" alt="" />
                        </div>
                        <h1 className='text-center font-mono font-bold text-lg  '>Anish</h1>
                        <h3 className='text-center font-bold text-[0.6rem] font-sans w-full  '>ddnishbhatta@gmail.com</h3>
        
                        <p className='text-xs font-thin text-center leading-tight '>
                            Lorem ipsum dolor, sit amet consectetur adipisicing.
                        </p>
                        <button className='bg-orange-600 px-2 rounded-2xl transition-all duration-100 active:bg-orange-800 active:text-yellow-400'>
                            Remove it
                        </button>
        
                    </div>  
                    ) 
                })
            }
        </>
   
  )
}

export default card