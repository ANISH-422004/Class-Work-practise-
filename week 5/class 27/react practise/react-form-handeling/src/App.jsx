import { useState } from 'react'
import Cards from './components/cards'
import Form from './components/form'
function App() {
 
  const [users, setuser] = useState([{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},])



  return (

    <>
      <div className='h-screen w-full bg-slate-300 flex items-center justify-center' >
          <div id="container" className=' mx-16 w-full '> 
            <Cards users={users}/>
            <Form/>
          </div>
      </div>
    </>
  )
}

export default App
