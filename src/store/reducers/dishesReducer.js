import { DISH_REQUEST, DISH_FAILURE, DISH_SUCCESS } from "../actions/actionsTypes";

const initialState = {
  dishes: {},
  loading: false,
  error: null,
};

const dishesReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISH_REQUEST: 
      return {...state, loading: true};
    case DISH_SUCCESS: 
      return {...state, dishes: action.data, loading: false};
    case DISH_FAILURE: 
      return {...state, error: action.error.toString(), show: true, loading: false};
    default:
      return state;
  }
};

export default dishesReducer;