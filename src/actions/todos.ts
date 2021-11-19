import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface FetchTodosAction {
  type: ActionTypes.fetchTodos;
  payload: Todo[];
}

interface DeleteTodoAction {
  type: ActionTypes.deleteTodo;
  payload: number;
}

const url = 'https://jsonplaceholder.typicode.com/todos';

const fetchTodos = () => async (dispatch: Dispatch) => {
  const response = await axios.get<Todo[]>(url);
  dispatch<FetchTodosAction>({
    type: ActionTypes.fetchTodos,
    payload: response.data,
  });
};

const deleteTodo = (id: number): DeleteTodoAction => ({
  type: ActionTypes.deleteTodo,
  payload: id,
});

export { fetchTodos, deleteTodo };
export type { Todo, FetchTodosAction, DeleteTodoAction };
