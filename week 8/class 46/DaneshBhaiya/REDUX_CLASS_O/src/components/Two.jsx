import React from 'react'
import { add } from '../store/Productslice'
import { useDispatch } from 'react-redux'

const Two = () => {
  const dispach = useDispatch()  
  const Addproduct = () => {
    const p = {
        id:1,
        product:"product4",
        price:32
    }

    dispach(add(p))
    // console.log(add);
    
  }  
  return (
    <div >
        <button className='bg-black text-white p-1 m-2 rounded' onClick={Addproduct}>Add Product</button>
    </div>
  )
}

export default Two