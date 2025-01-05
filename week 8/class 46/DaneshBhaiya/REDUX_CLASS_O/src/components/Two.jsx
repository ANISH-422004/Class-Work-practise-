import React from 'react'

import { useDispatch } from 'react-redux'
import { add,asyncremove } from '../store/actions/ProductActions'

const Two = () => {
  const dispatch = useDispatch()  
  const Addproduct = () => {
    const p = {
        id:1,
        product:"product4",
        price:32
    }

    dispatch(add(p))
    // console.log(add);
    
  }
  const Removeproduct = () => {

    dispatch(asyncremove());
  }
  


  return (
    <div >
        <button className='bg-black text-white p-1 m-2 rounded' onClick={Addproduct}>Add Product</button>
        <button className='bg-black text-white p-1 m-2 rounded' onClick={Removeproduct}>Delete Product</button>
    </div>
  )
}

export default Two