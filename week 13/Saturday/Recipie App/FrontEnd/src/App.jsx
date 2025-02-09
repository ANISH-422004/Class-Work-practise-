import React from 'react'
import Register from './components/Register'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Fee from './components/Fee'
import Recipie from './components/Recipie'
import ShowRecipe from './components/ShowRecipe'

const App = () => {
  return (
    <div className='w-full h-screen'>

      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/feed' element={<Fee/>} />
      <Route path='/create' element={<Recipie/>} />
      <Route path='recipedetails/:id' element={<ShowRecipe/>} />
      
      </Routes>
    </div>
  )
}

export default App