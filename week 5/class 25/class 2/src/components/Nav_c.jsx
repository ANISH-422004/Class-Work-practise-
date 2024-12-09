import React from 'react'

const Nav_c = ({availability,rate}) => {
    // console.log(availability,rate);
    
  return (
    <div className='w-full text-white h-[6%] flex justify-between px-2' >
            <h1 className={`a_or_na${availability ? " bg-green-600" : " bg-red-600"} text-center w-26 h-6 rounded-3xl px-1`}>{availability ? "Available" : "Unavailable"}</h1>
            <p className='Rate text-red-400'>Rate: $ {rate}</p>
    </div>
  )
}

export default Nav_c