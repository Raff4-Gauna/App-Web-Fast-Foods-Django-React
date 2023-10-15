// Dish Actions
export const CREATE_DISH = 'CREATE_DISH';
export const UPDATE_DISH = 'UPDATE_DISH';
export const DELETE_DISH = 'DELETE_DISH';

export const createDish = (data) => ({
  type: CREATE_DISH,
  payload: data,
});

export const updateDish = (data) => ({
  type: UPDATE_DISH,
  payload: data,
});

export const deleteDish = (id) => ({
  type: DELETE_DISH,
  payload: id,
});
