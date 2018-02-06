import { createStore, applyMiddleware } from 'redux';
import tetrisTree from './reducers';
import thunk from 'redux-thunk';




/*
** Middleware for loggin
*/
const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd(action.type)
  return result
}


let store = createStore(
  tetrisTree,
  applyMiddleware(thunk, logger),
);
export default store;