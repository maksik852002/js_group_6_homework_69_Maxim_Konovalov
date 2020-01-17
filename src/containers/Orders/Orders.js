import React, { Component } from "react";
import axios from '../../axios-setup';
import Spinner from "../../components/UI/Spinner/Spinner";
import OrderItem from "../../components/OrdersItem/OrdersItem";

class Orders extends Component {

  state = {
    orders: {},
    loading: false,
  }

  async componentDidMount() {
    let orders = {...this.state.orders};
    try {
      this.setState({loading: !this.state.loading})
      const response = await axios.get('/dish-orders.json');
      orders = response.data
      this.setState({orders, loading: !this.state.loading})
    } catch (error) {
      console.log(error)
      this.setState({loading: false});
    }
  }

  render() {
    const { orders, loading } = this.state
    let result = <Spinner/>;

    if (!loading) {
      result = Object.keys(orders).map(id => (
          <OrderItem
            key={id}
            id = {id}
            dishes={orders[id].dishes}
            customer={orders[id].customer}
          />
      ));
    }

    if (orders.length === 0) {
      result = <p>No orders!</p>
    }

    return result;
  }
}

export default Orders;