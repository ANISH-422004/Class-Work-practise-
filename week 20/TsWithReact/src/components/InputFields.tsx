import { useState } from "react"

interface InputFieldsProps {
    todo: string;
    setTodo:React.Dispatch<React.SetStateAction<string>>
    addTodo : (e: React.FormEvent) => void
}

const InputFields = ({todo , setTodo , addTodo} : InputFieldsProps) => {

    return (
        <form action="" className=" flex items-center gap-2 " onSubmit={addTodo}>
            <input onChange={(e) => {
                setTodo(e.target.value)
            }} value={todo} className="p-2 border rounded w-50" type="text" placeholder="Enter a Task" />
            <button  type="submit" className="p-2 bg-blue-500 rounded-full hover:bg-blue-600
            active:bg-green-400 ">Go</button>
        </form>
    )
}

export default InputFields