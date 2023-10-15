import { createStore, combineReducers } from 'redux';
import dishReducer from './reducers/dishReducer';

const rootReducer = combineReducers({
  dish: dishReducer, // Add other reducers here if needed
});

const store = createStore(rootReducer);

export default store;
