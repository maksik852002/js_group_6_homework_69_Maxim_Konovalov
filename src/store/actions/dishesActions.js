import {ADD_TO_CART, DISH_REQUEST, DISH_SUCCESS, DISH_FAILURE } from "./actionsTypes";
import axios from '../../axios-setup';

export const addToCart = (dishName) => ({type: ADD_TO_CART, dishName});
export const dishRequest = () => ({type: DISH_REQUEST});
export const dishSuccess = (data) => ({type: DISH_SUCCESS, data});
export const dishFailure = (error) => ({type: DISH_FAILURE, error});

export const getDishes = () => {
  return async dispatch => {
    try {
    dispatch(dishRequest());
    const response = await axios.get('/dishes.json');
    dispatch(dishSuccess(response.data));
    } catch (e) {
      dispatch(dishFailure(e));
    }
  }
}