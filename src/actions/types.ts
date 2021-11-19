import { FetchTodosAction, DeleteTodoAction } from './todos';

enum ActionTypes {
  fetchTodos,
  deleteTodo,
}

type Action = FetchTodosAction | DeleteTodoAction;

export { ActionTypes };
export type { Action };
