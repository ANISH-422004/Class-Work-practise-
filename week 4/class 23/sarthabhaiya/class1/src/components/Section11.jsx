import React from 'react'
import { GoArrowRight } from "react-icons/go";

const Section11 = () => {
  return (
    <>  
        <div className='bg-black text-white h-[86vh]' >  



        <div id="top" className='h-[60%] w-[100%] flex '>
                <div id="left " className='flex flex-col gap-12 p-14 w-[40%]'>
                    <h1 className='text-4xl font-semibold'>Let's turn some heads!</h1>
                    <div id="button">
                        <button className='bg-transparent border border-white rounded-lg p-2 flex gap-2 justify-center items-center transition-all duration-200 hover:scale-110 '>contact <GoArrowRight/> </button> 
                    </div>
                </div>
                <div id="right"  className=' gap-12 py-14 px-24 w-[60%] flex justify-end'>
                    <div className="buttons flex flex-col  "  >
                            <div id="type">
                                <h4 className='mb-3 text-xl'>Socials</h4>
                            </div>
                            <a className=' transition-all duration-200 hover:scale-110 my-1' href="" >Instagram</a>
                            <a className=' transition-all duration-200 hover:scale-110 my-1' href="" >LinkedIn</a>
                    </div>
                    <div className="buttons flex flex-col  "  >
                            <div id="type">
                                <h4 className='mb-3 text-xl'>Sitemap</h4>
                            </div>
                            <a className=' transition-all duration-200 hover:scale-110 my-1 ' href="" >Home</a>
                            <a className=' transition-all duration-200 hover:scale-110 my-1' href="" >Projectn</a>
                            <a className=' transition-all duration-200 hover:scale-110 my-1' href="" >over</a>
                            <a className=' transition-all duration-200 hover:scale-110 my-1' href="" >contact</a>
                    </div>
                    <div className="buttons flex flex-col  "  >
                            <div id="type">
                                <h4 className='mb-3 text-xl'>Info</h4>
                            </div>
                            <a className=' transition-all duration-200 hover:scale-110 my-1' href="" >Algemene voorwaarden</a>
                            <a className=' transition-all duration-200 hover:scale-110 my-1' href="" >Privacybeleid</a>
                            <a className=' transition-all duration-200 hover:scale-110 my-1' href="" >Cookiebeleid</a>
                    </div>
                </div>
        </div>

        <img src="https://cdn.prod.website-files.com/6454cbf2dcc426c6ec47ef06/64cac5baf9ba36af8ed3ab61_Laag_1.png" loading="lazy" sizes="100vw" srcset="https://assets-global.website-files.com/6454cbf2dcc426c6ec47ef06/64cac5baf9ba36af8ed3ab61_Laag_1-p-500.png 500w, https://assets-global.website-files.com/6454cbf2dcc426c6ec47ef06/64cac5baf9ba36af8ed3ab61_Laag_1-p-800.png 800w, https://assets-global.website-files.com/6454cbf2dcc426c6ec47ef06/64cac5baf9ba36af8ed3ab61_Laag_1-p-1080.png 1080w, https://assets-global.website-files.com/6454cbf2dcc426c6ec47ef06/64cac5baf9ba36af8ed3ab61_Laag_1.png 1920w" alt="" class="image is-contain"></img>



        </div>

    </>
  )
}

export default Section11