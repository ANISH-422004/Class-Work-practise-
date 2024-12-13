import { useState } from 'react'
import Cards from './components/cards'
import Form from './components/Form.jsx'
function App() {
 
  const [users, setUser] = useState([{},])

  const handelSubmit = (e)=>{
        e.preventDefault()
  }

  return (

    <>
      <div className='h-screen w-full bg-slate-300 flex items-center justify-center' >
          <div id="container" className=' mx-16 w-full '> 
            <Cards users={users}/>
            <Form setUser={setUser} users={users}/>
          </div>
      </div>
    </>
  )
}

export default App
