import {FaToggleOff, FaToggleOn, FaTrash} from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { removeTodo, toggleTodo } from '../redux/action'
import { Todo } from '../types';

interface Props {
  todo: Todo;
  index: number;
}

export const TodoItem: React.FC<Props> = ({ todo, index }) => {
  const dispatch = useDispatch()

  const handleRemoveTodo = () => {
    dispatch(removeTodo(todo.id))
  }

  const handleToggleTodo = () => {
    dispatch(toggleTodo(todo.id))
  }

  return (
    <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 py-2 gap-4" >
      <div className="flex items-center">
        <span className="mr-4 text-gray-500">{index + 1}</span>
        <span className={`mr-4  ${todo.completed ? 'line-through text-teal-500' : 'text-black'}`}>{todo.text}</span>
      </div>
      <div className="space-x-3 ml-8">
        <button
          onClick={handleToggleTodo}
          className='mr-2 text-sm bg-blue-500 text-white sm:px-2 py-1 px-1 rounded'
        >
          {todo.completed ? <FaToggleOff /> : <FaToggleOn />}
        </button>
        <button
          onClick={handleRemoveTodo}
          className='mr-2 text-sm bg-red-500 text-white sm:px-2 py-1 px-1 rounded'
        >
          <FaTrash />
        </button>
      </div>
    </li>

  )
}