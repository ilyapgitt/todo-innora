import { useSelector } from "react-redux"
import { TodoItem } from "./TodoItem"
import { Todo, TodoState } from "../types"

export const TodList: React.FC = () => {

  const todos = useSelector((state: TodoState) => state.todos)

  return (
    <ul className="divide-y divide-gray-200 px-4">
      {todos.map((todo: Todo, index) => (
          <TodoItem todo={todo} key={todo.id} index={index} />
      ))}
    </ul>
  )
}