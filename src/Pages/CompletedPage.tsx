import { useSelector } from "react-redux"
import { TodoItem } from "../Components/TodoItem"
import { Todo, TodoState } from "../types"

export const CompletedPage: React.FC = () => {
  const todos = useSelector((state: TodoState) => state.todos)

  return (
    <div className="max-w-md w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16">
      <div className="px-4 py-2">
        <h1 className="text-gray-800 font-bold text-2xl uppercase">Completed Tasks</h1>
      </div>
      <div className="w-full max-w-sm mx-auto">
        {todos.map((todo: Todo, index) =>
          !todo.completed ? null : <TodoItem todo={todo} key={todo.id} index={index} />
        )}
      </div>
    </div>
  )
}