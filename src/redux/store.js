import { createStore } from 'redux';
import tetrisTree from './reducers';
let store = createStore(tetrisTree);
export default store;