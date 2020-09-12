import {ADD_TODO, DELETE_TODO, MARK_AS_DONE} from './constants';

const todosReducer = (state=[], action) => {
console.log('from todosReducer', action);
  switch(action.type) {
    case ADD_TODO:
      return [...state, {id: action.id, task: action.task, done: false}];
    case MARK_AS_DONE:
      return [...state.map((todo) => {
        if (todo.id === action.id) {
          return {...todo, done: true};
        } else {
          return todo;
        }
      })];
    case DELETE_TODO:
      return [...state.filter(todo => todo.id !== action.id)];
      break;
    default:
      return state;
  }
};

export default todosReducer;
