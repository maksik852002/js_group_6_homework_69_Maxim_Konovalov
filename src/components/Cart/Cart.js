import React, { Component } from 'react';
import { connect } from "react-redux";
import OrderList from "../../components/OrderList/OrderList";
import Button from "../../components/UI/Button/Button";
import {removeFromCart, makeAnOrder } from '../../store/actions/cartActions';

class Cart extends Component {

  render = () => {
    const { dishes, totalPrice, removeFromCart, makeAnOrder, } = this.props;
    return (
      <div className="col-12 col-md-6 mb-3">
      <h5>Корзина:</h5>
      <div className="border border-secondary rounded p-2">
          <div className="p-0 text-left">
            {Object.keys(dishes).map(dish => dishes[dish].qty > 0 &&  (
              <OrderList
                key={dish}
                name={dish}
                price={dishes[dish].price}
                qty={dishes[dish].qty}
                click={() => removeFromCart(dish)}
              />
            ))}
          </div>
          <hr/>
          <p> Общая Сумма: {totalPrice} KGS</p>
          {totalPrice > 0 && 
            <Button
              addClass='secondary'
              label='Сделать заказ'
              click={makeAnOrder}
            />
          }
      </div>
    </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    dishes: state.cart.dishes,
    totalPrice: state.cart.totalPrice,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeFromCart: (dishName) => dispatch(removeFromCart(dishName)),
    makeAnOrder: () => dispatch(makeAnOrder()),
  };
};

  export default  connect(mapStateToProps, mapDispatchToProps)(Cart)