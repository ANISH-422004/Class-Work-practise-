import React from 'react'
import NavBar from './components/NavBar'
import { Outlet } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'

const App = () => {
  return (
    <>
      <NavBar/>   
      <AppRoutes/>
      <Outlet/>

   </>


  )
}

export default App