import React from 'react'
import Webbtn from './Webbtn'
const Section4 = () => {
  return ( 
    <div className='Section4 w-full flex flex-col justify-center items-center gap-10 px-10 py-10 my-10 relative'>
        <p>Cases</p>
        
        <h1 className='text-8xl font-bold uppercase text-center w-[80%]' > Head Turning Projects </h1>

        <div>
            <h3 className='bg-yellow-500 p-4 rounded-3xl absolute top-[74%] left-[58%] -rotate-12'>Gotta see 'm all</h3>
        </div>

    
        <div className='absolute top-[85%] left-[75%]'>
        <Webbtn/>
        </div>
    
    
    </div>
  )
}

export default Section4