import { combineReducers } from 'redux';
import { Todo } from '../actions';
import { todosReducer } from './todos';

interface StoreState {
  todos: Todo[];
}
const reducers = combineReducers<StoreState>({
  todos: todosReducer,
});

export { reducers };
export type { StoreState };
