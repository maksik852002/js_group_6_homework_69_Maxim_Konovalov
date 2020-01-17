import { CART_SUCCESS, CART_FAILURE, ADD_TO_CART, REMOVE_FROM_CART,  MAKE_AN_ORDER, CLOSE_MODAL } from "../actions/actionsTypes";

const initialState = {
  dishes: {},
  totalPrice: 0,
  show: false,
  error: null,
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_SUCCESS: 
      return {...state, show: false, dishes: action.data, totalPrice: 0 };
    case CART_FAILURE: 
      return {...state, error: action.error.toString(), show: true};
    case ADD_TO_CART: 
      return {...state, dishes: {...state.dishes, [action.dishName]: {...state.dishes[action.dishName], qty: state.dishes[action.dishName].qty + 1, totalPrice: state.totalPrice += state.dishes[action.dishName].price}}}
    case REMOVE_FROM_CART: 
      return {...state, dishes: {...state.dishes, [action.dishName]: {...state.dishes[action.dishName], qty: state.dishes[action.dishName].qty - 1, totalPrice: state.totalPrice -= state.dishes[action.dishName].price}}};
    case MAKE_AN_ORDER: 
      return {...state, show: true}
    case CLOSE_MODAL:
      return { ...state, show: false};
    default:
      return state;
  }
};

export default cartReducer;