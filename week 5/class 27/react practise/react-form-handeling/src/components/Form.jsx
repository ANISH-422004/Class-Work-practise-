import React from 'react'





const Form = () => {
  return (
    
    <div className='mt-10 flex justify-center items-center'>
                <form action="" className='flex gap-3'>
                            <input type="text" className='rounded-md px-2 py-1 font-semibold' placeholder='name' />
                            <input type="text" className='rounded-md px-2 py-1 font-semibold' placeholder='email' />
                            <input type="text" className='rounded-md px-2 py-1 font-semibold' placeholder='image url' />
                            <input type="submit" className='bg-blue-400 p-1  text-white rounded-xl' />
                </form>
    </div>
  )
}

export default Form