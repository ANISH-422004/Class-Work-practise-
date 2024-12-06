import React from 'react'

const Section9 = () => {
  return (
    <>
    
        <div  className='bg-[#F4F4F1] min-h-[100vh] px-10 py-10 flex flex-col gap-4'>
                <div id="img-container" className='rounded-[10rem] overflow-hidden'>
                <img className=' h-[150vh]  ' src="https://assets-global.website-files.com/6454cbf2dcc426c6ec47ef06/64cabd4824cecf2c23abed79_BRAND%20STORY%20SESSIES_Home-Nan-p-2000.webp" alt="" />
                </div>
                
                <div id="bot" className='flex gap-3 '>
                    <div id="left" className='bg-[#A3A4A7] text-white p-1 rounded-3xl '>
                        <p>Brand Story sessies</p>
                    </div>
                    <div id="right" className='flex justify-center items-center'>
                        <p>Samen ontdekken we jouw merkverhaal</p>
                    </div>
                </div>

        </div>

    </>
  )
}

export default Section9