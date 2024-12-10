import React, { useState } from 'react'
const Section = () => {

 const [nm, setnm] = useState(0)
  return (
    <div>
       <h1>
          Your Number is {nm}
       </h1>
        <button  onClick={()=>setnm(nm+1)} className='bg-blue-400 p-2 m-2 '>
                Increase
        </button>
        <button  onClick={()=>setnm(nm-1)} className='bg-blue-400 p-2 m-2 '>
                Decrease
        </button>
        <button  onClick={()=>setnm(nm*nm*nm)} className='bg-blue-400 p-2 m-2 '>
            cube
        </button>
    </div>
  )
}

export default Section