

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Cart from '../components/Cart'

const Approutes = () => {
  return (
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/cart" element={<Cart />} />
  </Routes>
  )
}

export default Approutes