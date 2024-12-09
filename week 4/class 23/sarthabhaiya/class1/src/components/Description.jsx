import React from 'react'
import Boxtext from './Boxtext'
const Description = () => {
  return (
    <div className='w-[100%]'>
        <p className='text-[#A4A5A8] font-medium'>Gaaf Creaties</p>
        <h3 className='text-black font-medium text-lg'>Creating mood-boosting experiences</h3>
        
        <div id="boxes" className='flex gap-1 my-1 '>
                <Boxtext/>
                <Boxtext/>
                <Boxtext/>            
        </div>

    </div>
  )
}

export default Description ;