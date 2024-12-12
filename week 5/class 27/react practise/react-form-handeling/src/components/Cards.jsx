import React from 'react'
import Card from './Card.jsx'



const cards = ({users}) => {
  return (
    <div className='h-80 w-full  bg-sky-300 flex justify-center items-start gap-5 flex-wrap p-1 overflow-auto'>
        <Card users={users}/>


    </div>
  )
}

export default cards