import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getDishes } from "../../store/actions/dishesActions";
import { closeModal, postOrder } from "../../store/actions/cartActions";
import Dishes from "../../components/DIshes/Dishes";
import Cart from "../../components/Cart/Cart";
import OrderForm from "../../components/OrderForm/OrderForm";
import Spinner from "../../components/UI/Spinner/Spinner";
import Modal from "../../components/UI/Modal/Modal";

class OrderBuilder extends Component {

  componentDidMount() {
    this.props.getDishes();
  }

  render() {
    const { dishes, loading, error, closeModal, show, postOrder } = this.props;
    return (
      <Fragment>
        {show && <Modal show={show} close={closeModal}>{error ? error  : <OrderForm dishes={dishes} postOrder={postOrder} getDishes={this.props.getDishes}/>}</Modal>}
        {loading ? <Spinner/> :
        <div className="container">
          <div className="row mt-3 text-center">
            <Dishes/>
            <Cart/>
          </div>
        </div>
        }
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    dishes: state.cart.dishes,
    loading: state.ds.loading,
    show: state.cart.show,
    error: state.ds.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getDishes: () => dispatch(getDishes()),
    closeModal: () => dispatch(closeModal()),
    postOrder: (dishName) => dispatch(postOrder(dishName)),
  };
};

export default connect (mapStateToProps, mapDispatchToProps)(OrderBuilder);