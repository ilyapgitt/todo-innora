import { useSelector } from "react-redux"
import { RemoveTodoItem } from "../Components/RemoveTodoItem"
import { Todo, TodoState } from "../types"

export const RemovePage: React.FC = () => {
  const todos = useSelector((state: TodoState) => state.deletedTodos)

  return (
    <div className="max-w-md w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16">
      <div className="px-4 py-2">
        <h1 className="text-gray-800 font-bold text-2xl uppercase">Remove Tasks</h1>
      </div>
      <div className="w-full max-w-sm mx-auto">
        {todos.map((todo: Todo, index) =>
          !todo.completed ? null : <RemoveTodoItem todo={todo} key={todo.id} index={index} />
        )}
      </div>
    </div>
  )
}