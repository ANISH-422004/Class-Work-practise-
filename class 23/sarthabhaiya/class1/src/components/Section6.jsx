import React from 'react'
import Description from './Description'
import Webbtn from './Webbtn'
const Section6 = () => {
  return (
    <>
        <div className='h-[125vh] px-10 my-32'>

                <div className='flex '>


                                <div id="left" className='w-[50%] h-[] '>
                                        <div id="top" className='group h-[80%] flex justify-center relative'>
                                                <div id="imagecontainer" className=' w-[97%] h-[100%] flex items-center justify-center rounded-[2rem] group-hover:rounded-[10rem] object-cover overflow-hidden transition-all duration-500'>
                                                        
                                                            <img  className='  aspect-square  rounded-xl transition-all duration-500 hover:scale-125 ' src="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64cac65e2bf6eb87608fe500_GC_Flyers-Nan-min-p-2000.jpg" alt="" />
                                                    
                                                </div>
                                                
                                                <img className='w-[50%] aspect-square rounded-[5rem] transition-all duration-300 absolute top-[50%] left-[50%] -translate-y-2/4 -translate-x-2/4 opacity-0 group-hover:opacity-100'
                                                src="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64b7f94076df56f95d20243d_GAAF_DowntoEarth-min-p-2000.jpg" alt="" />

                                        </div>

                                        <div id="bottom" className=' p-1 h-[20%]'>
                                            <Description/>
                                        </div>
                                </div>

                                <div id="right" className='w-[50%]  '>

                                <div id="top" className='group h-[100%] flex justify-center relative'>
                                                <div id="imagecontainer" className=' w-[97%] h-[100%] flex items-center justify-center rounded-[2rem] group-hover:rounded-[10rem] object-cover overflow-hidden transition-all duration-500'>
                                                        
                                                            <img  className=' h-[100%] aspect-square  rounded-xl transition-all duration-500 hover:scale-125 ' src="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64bbb716dc15a767d726cdea_DM_header-p-1600.jpg" alt="" />
                                                    
                                                </div>
                                                
                                                <img className='w-[50%] rounded-[5rem] transition-all duration-300 absolute top-[50%] left-[50%] -translate-y-2/4 -translate-x-2/4 opacity-0 group-hover:opacity-100'
                                                src="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64bbb59c356882b9497fea77_DM_Hand%20Holding%20Pin-min-p-2000.jpg" alt="" />

                                        </div>

                                        <div id="bottom" className=' p-1 h-[20%]'>
                                            <Description/>
                                        </div>
                                </div>

                </div>

                <div id="letsmeet-bottom" className=' h-[30%] flex flex-col justify-end'>
                    <div className=' bg-white h-[40%] w-[50%] mb-10 rounded-3xl flex justify-center items-center gap-2'>   
                        <h3 className='font-semibold'>Ook aan de slag met jouw merk? </h3>

                        <Webbtn/>
                    </div>

                </div>
        </div>

        

        

    </>
  )
}

export default Section6 ; 