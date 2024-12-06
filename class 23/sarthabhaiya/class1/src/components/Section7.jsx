import React from 'react'
import Blackbutton from './Blackbutton'

const Section7 = () => {
  return (
    <>
    <div  className='bg-[#F4F4F1] min-h-[100vh] px-10 py-10 ' >


        <div id="top" className='h-[20%] flex justify-between'>
                <div id="left" className='flex flex-col justify-between w-[20%] h-[100%]'>
                    <p>Services</p>
                    <h2 className='font-semibold text-xl'>Zo onderscheiden we je van de norm</h2>
                </div>
                <div id="right " className='flex flex-col justify-end'>
                    <Blackbutton/>
                </div>
        </div>


        <div id="bottom" className='h-[80%] bg-white mt-4 flex gap-2'>

            <div className="card group h-[100%] w-[25%] rounded-xl overflow-hidden ">
                <div id="top" className='h-[50%]  bg-slate-300 object-cover transition-all duration-500 overflow-hidden  group-hover:rounded-[5em] '>
                    <img className='h-[100%] w-[100%]' src="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64cac464ae61273a7c937ded_BRAND%20STORY_Over-Nan-p-500.jpg" alt="" />
                </div>
                <div id="bottomIN" className='h-[50%] bg-[#AA81B7]  text-white flex flex-col justify-center items-center gap-8 transition-all duration-500 overflow-hidden  group-hover:rounded-[5em] py-4'>
                       <h4 className='w-[60%]'>
                            Brand Story
                         </h4>
                         <p className='w-[60%]'>
                            Together we create a strong foundation for an irresistible design.
                         </p>           
                
                </div>        
            </div>
            <div className="card group h-[100%] w-[25%] rounded-xl overflow-hidden">
                <div id="top" className='h-[50%]  bg-slate-300 object-cover transition-all duration-500 overflow-hidden  group-hover:rounded-[5em] '>
                    <img className='h-[100%] w-[100%]' src="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64e51e8b3be191fdc49c321d_NaN_Merkidentiteit-p-500.jpg" alt="" />
                </div>
                <div id="bottomIN" className='h-[50%] bg-black text-white flex flex-col justify-center items-center gap-8 transition-all duration-500 overflow-hidden  group-hover:rounded-[5em] py-4'>
                         <h4 className='w-[60%]'>
                            Brand Story
                         </h4>
                         <p className='w-[60%]'>
                            Together we create a strong foundation for an irresistible design.
                         </p>                     
                
                </div>        
            </div>
            <div className="card group h-[100%] w-[25%] rounded-xl overflow-hidden">
                <div id="top" className='h-[50%]  bg-slate-300 object-cover transition-all duration-500 overflow-hidden  group-hover:rounded-[5em] '>
                    <img className='h-[100%] w-[100%]' src="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64e51e7766e8d5682bf6ee25_NaN_Webdesign-p-500.jpg" alt="" />
                </div>
                <div id="bottomIN" className='h-[50%] bg-[#36A96A]  text-white flex flex-col justify-center items-center gap-8 transition-all duration-500 overflow-hidden  group-hover:rounded-[5em] py-4'>
                         <h4 className='w-[60%]'>
                            Web Desgine
                         </h4>
                         <p className='w-[60%]'>
                            Together we create a strong foundation for an irresistible design.
                         </p>           
                
                </div>        
            </div>
            <div className="card group h-[100%] w-[25%] rounded-xl overflow-hidden">
                <div id="top" className='h-[50%]  bg-slate-300 object-cover transition-all duration-500 overflow-hidden  group-hover:rounded-[5em]'>
                    <img className='h-[100%] w-[100%]' src="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64bbb43e292b8b8352068a48_NaN_A%20la%20Carte-p-500.jpg" alt="" />
                </div>
                <div id="bottomIN" className='h-[50%] bg-[#FA8A58]  text-white flex flex-col justify-center items-center gap-8 transition-all duration-500 overflow-hidden  group-hover:rounded-[5em] py-4'>
                         <h4 className='w-[60%]'>
                            A la crate
                         </h4>
                         <p className='w-[60%]'>
                            Together we create a strong foundation for an irresistible design.
                         </p>                
                
                </div>        
            </div>

        </div>


    </div>
    </>
  )
}

export default Section7