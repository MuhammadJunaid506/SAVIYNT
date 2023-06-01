import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import itemReducer from './itemReducer';

const store = createStore(itemReducer, applyMiddleware(thunk));

export { store };
