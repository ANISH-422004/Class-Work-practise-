import React, { useContext, useState } from 'react'
import One from './components/One'
import Two from './components/Two'
import DataContext from './context/DataContext'

const App = () => {
  const data = useContext(DataContext)
  return (
    <div>
      app
      <One data={data}/>
      <Two data={data}/>
    </div>
  )
}

export default App