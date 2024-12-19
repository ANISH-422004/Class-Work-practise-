import React from 'react'
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <> 
      <Header></Header>
      <Routes>
        <Route to="/" v></Route>
      </Routes>
     </>
  )
}

export default App