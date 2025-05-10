import type React from "react"
import InputFields from "./components/InputFields"
import { useState } from "react"
import TodoList from "./components/TodoList"

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("")


  interface Todo {
    id: number;
    title: string;
    completed: boolean;
  }


  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault()
    if (todo) {
      setTodos([...todos, {
        id: Date.now(),
        title: todo,
        completed: false
      }])

      setTodo("")

    }
  }

  console.log(todos)

  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-3xl font-bold">Taskify</h1>
      <InputFields todo={todo} setTodo={setTodo} addTodo={addTodo} />
      <TodoList  todos={todos} setTodos={setTodo} />
    </div>
  )
}

export default App
