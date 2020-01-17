import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../../store/actions/dishesActions";
import Dish from "../../components/Dish/Dish";

class Dishes extends Component {

  render = () => {
    const { dishes, addToCart } = this.props;
    return(
      <div className="col-12 col-md-6 mb-3">
        <h5>Блюда:</h5>
        <div className="border border-secondary rounded p-2">
            {Object.keys(dishes).map(dish => (
              <Dish
                key={dish}
                name={dish}
                price={dishes[dish].price}
                img={dishes[dish].img}
                click={() => addToCart(dish)}
              />
            ))
            }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    dishes: state.ds.dishes,
    totalPrice: state.cart.totalPrice,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: (dishName) => dispatch(addToCart(dishName)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dishes);