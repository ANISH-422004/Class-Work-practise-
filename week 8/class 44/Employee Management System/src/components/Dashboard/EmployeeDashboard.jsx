import React from 'react'
import Header from '../Others/Header'
import TaskListNumber from '../Others/TaskListNumber'
import TaskList from '../Tasklist/TaskList'

const EmployeeDashboard = ({data,changeuser}) => {
  // console.log(changeuser);
  
  return (
    <div className='p-10 b bg-[#1C1C1C] min-h-screen'>
            
            <Header changeuser={changeuser} data={data}/>
            <TaskListNumber data={data} />
            <TaskList data={data} />
    </div>
  )
}

export default EmployeeDashboard