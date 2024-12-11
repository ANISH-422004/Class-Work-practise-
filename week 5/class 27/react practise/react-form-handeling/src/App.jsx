import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useForm } from 'react-hook-form'


function App() {
 
  const {register , handleSubmit} = useForm () ;
  // console.log(a);
  


  return (

    <>
      <div className='h-20 w-full bg-slate-600' onClick={handleSubmit(data => console.log(data))}>
        <form action="">
          <input {...register('name')} type="text" placeholder='name' />
          <input {...register('email')} type="text" placeholder='email' />
          <input type="submit" className='bg-blue-500 p-2 rounded-2xl active:bg-black active:text-white' />
        </form>
      </div>
    </>
  )
}

export default App
