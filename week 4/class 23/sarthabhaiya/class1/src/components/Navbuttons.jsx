import React from 'react'

const Navbuttons = () => {
  const btnstr = ["Project","over","Contact"]
  return (
    <>
      {
        btnstr.map((e)=>{
              return(
                    <button className='bg-transparent border border-black rounded-xl px-4 py-2 transition-all ease-linear 
                    transiton-es hover:bg-black hover:text-white '>
                      {e}
                    </button>

              )
        })
      }

    </>
  )
}

export default Navbuttons