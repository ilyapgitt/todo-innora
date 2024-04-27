import { Todo, TodoState } from "../types";
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, TodoActionTypes } from "./actionTypes";

const initialState: TodoState = {
  todos: [],
  deletedTodos: [],
}

function generateUniqueId(): string {
  return '_' + Math.random().toString(36).substr(2, 9);
}


export default function todoReducer(state = initialState, action: TodoActionTypes): TodoState {
  switch (action.type) {
    case ADD_TODO:
      const newTodo: Todo = {
        id: generateUniqueId(),
        text: action.payload.text,
        completed: false
      }
      return {
        ...state,
        todos: [...state.todos, newTodo],
      }
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo),
      }
    case REMOVE_TODO:
      const deletedTodo = state.todos.find(todo => todo.id === action.payload.id);
      if (deletedTodo) {
        return {
          ...state,
          todos: state.todos.filter((todo) => todo.id !== action.payload.id),
          deletedTodos: [...state.deletedTodos, deletedTodo]
        };
      }
      return state;
    default:
      return state;
  }
}