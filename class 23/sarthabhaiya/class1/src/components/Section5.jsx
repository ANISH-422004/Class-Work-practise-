import React from 'react'
import Boxtext from './Boxtext'

const Section5 = () => {
  return (
    <div className='w-[100%]  flex flex-col justify-center items-center'>

        <div className=' w-[90%] h-[100%] group  my-10 relative '>

            <div className='  w-[100%] h-[100%]  bg-blue-300 rounded-[2rem] group-hover:rounded-[10rem] overflow-hidden transition-all duration-500'>
                <img className=" w-[100%] hover:scale-125  transition-all duration-500"
                src="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/65492b562e62e676d4159713_NS_Wayfinding%20_%20NaN-p-2000.jpg" alt="" />
            </div>

            <img className='w-[30%] rounded-[5rem] transition-all duration-300 absolute top-[50%] left-[50%] -translate-y-2/4 -translate-x-2/4 opacity-0 group-hover:opacity-100'
            src="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/65492b6d98261b9aedd2482e_NS_Logo-NaN-p-800.jpg" alt="" />

        </div>

        <div id="footnote-container " className=' px-16 flex justify-start w-full'>
        <div className='footnotes  ' >
            <h4 className='text-gray-400'>Nieuw Schaijk</h4>
            <h3>De smaak van thuis</h3>
            <div id="boxes" className='flex gap-1 my-2'>
                  <Boxtext/>
                  <Boxtext/>
            </div>
        </div>
        </div>

    </div>

  )  
}

export default Section5