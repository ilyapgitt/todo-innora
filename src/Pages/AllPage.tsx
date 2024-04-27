import { useState } from "react"
import { TodList } from "../Components/TodoList"
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/action";

export const AllPage = () => {
  const dispatch = useDispatch()
  const [newTodo, setNewTodo] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value)
  }

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      dispatch(addTodo(newTodo.trim()))
      setNewTodo('')
    }
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleAddTodo()
    }
  }

  return (
    <div className="max-w-md w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16">
        <div className="px-4 py-2">
          <h1 className="text-gray-800 font-bold text-2xl uppercase">All Tasks</h1>
        </div>

        {/* Input and add button */}
        <form className="w-full max-w-sm mx-auto px-4 py-2">
          <div className="flex items-center border-b-2 border-teal-500 py-2">
            <input
              value={newTodo}
              onChange={handleInputChange}
              onKeyDown={handleKeyPress}
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text" 
              placeholder="Add a task" 
              id="addTodoInput"
              name="addTodoInput"
            />
            <button
              className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
              type="button"
              onClick={handleAddTodo}
            >
              Add
            </button>
          </div>
        </form>

        {/* Add todo list */}
        <TodList />
      </div>
  )
}