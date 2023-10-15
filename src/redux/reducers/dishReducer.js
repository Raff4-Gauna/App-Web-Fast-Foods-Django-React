import {
    CREATE_DISH,
    UPDATE_DISH,
    DELETE_DISH,
  } from '../actions/dishActions';
  
  const initialState = {
    // Initial state here
  };
  
  const dishReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_DISH:
        // Handle create action here, return updated state
      case UPDATE_DISH:
        // Handle update action here, return updated state
      case DELETE_DISH:
        // Handle delete action here, return updated state
      default:
        return state;
    }
  };
  
  export default dishReducer;
  