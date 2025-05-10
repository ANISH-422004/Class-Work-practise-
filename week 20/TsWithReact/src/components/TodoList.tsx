import type React from "react"

interface props {
    todos: {
        id: number;
        title: string;
        completed: boolean;
    }[],
    setTodos: React.Dispatch<React.SetStateAction<string>>
}

const TodoList: React.FC<props> = ({ todos, setTodos }) => {
    return (
        <div>
                {
                    todos.map((todo)=>{return(

                        <div key={todo.id} className="flex items-center gap-2">
                            <input type="checkbox" checked={todo.completed} />
                            <p className={`text-xl ${todo.completed ? "line-through" : ""}`}>{todo.title}</p>


                            <button className="p-2 bg-red-500 rounded-full hover:bg-red-600 active:bg-green-400">Delete</button>

                        </div>




                    )})
                }


        </div>
    )
}

export default TodoList