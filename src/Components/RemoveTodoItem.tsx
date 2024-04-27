import { Todo } from '../types';

interface Props {
  todo: Todo;
  index: number;
}

export const RemoveTodoItem: React.FC<Props> = ({ todo, index }) => {

  return (
    <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 py-2 gap-4" >
      <div className="flex items-center">
        <span className="mr-4 text-gray-500">{index + 1}</span>
        <span className={`mr-4  ${todo.completed ? 'line-through text-teal-500' : 'text-black'}`}>{todo.text}</span>
      </div>
    </li>

  )
}