export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: {
    text: string
  }
}

interface ToggleTodoAction {
  type: typeof TOGGLE_TODO;
  payload: {
    id: string;
  };
}

interface RemoveTodoAction {
  type: typeof REMOVE_TODO;
  payload: {
    id: string;
  };
}

export type TodoActionTypes = AddTodoAction | ToggleTodoAction | RemoveTodoAction