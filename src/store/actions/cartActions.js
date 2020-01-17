import { MAKE_AN_ORDER, CART_SUCCESS, CART_FAILURE, REMOVE_FROM_CART, CLOSE_MODAL } from "./actionsTypes";

import axios from '../../axios-setup';

export const removeFromCart = (dishName) => ({type: REMOVE_FROM_CART, dishName});
export const makeAnOrder = () => ({type: MAKE_AN_ORDER});
export const cartSuccess = () => ({type: CART_SUCCESS});
export const cartFailure = (error) => ({type: CART_FAILURE, error});
export const closeModal = () => ({type: CLOSE_MODAL});

export const postOrder = (order) => {
  return async dispatch => {
    try {
      await axios.post('/dish-orders.json', order);
    } catch (error) {
      dispatch(cartFailure(error));
    }
  }
}