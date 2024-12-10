import React from 'react'

const Navbar = ({data}) => {
    // console.log(data);
    
  return (
    <div className='w-full h-[10%] px-10 flex justify-between items-center '>
        
        <h1 className='flex justify-center items-center text-orange-400 text-2xl font-sans font-bold'>Orange</h1>
        <div id="fabourites" className='bg-orange-400 flex justify-center items-center w-28 p-2 rounded-xl'>
            favourites : {
                data.filter(item=> !item.added).length 
            }
        </div>

    </div>
  )
}

export default Navbar