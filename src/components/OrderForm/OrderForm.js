import React, { Component } from 'react';
import Button from '../UI/Button/Button';
import './OrderForm.css'

class OrderForm extends Component {
  state = {
    name: '',
    address: '',
    phone: '',
  }

  orderHandler = async (e) => {
    e.preventDefault();
    const dishes = Object.keys(this.props.dishes).reduce((acc, name) => {acc[name]=(acc[name] || 0)+this.props.dishes[name].qty; return acc}, {})
    const order = {
      dishes: dishes,
      customer: {
        name: this.state.name,
        address: this.state.address,
        phone: this.state.phone,
      }
    };
    await this.props.postOrder(order)
    this.props.getDishes();  
  };

  valueChanged = e => this.setState({[e.target.name]: e.target.value});

  render = () => {
    return (
      <div className="ContactData">
        <h4>Введите контактные данные</h4>
        <form onSubmit={this.orderHandler}>
          <input
            className="Input"
            type="text"
            name="name"
            placeholder="Имя"
            value={this.state.name}
            onChange={this.valueChanged}
          />
          <input
            className="Input"
            type="text"
            name="address"
            placeholder="Aдрес"
            value={this.state.address}
            onChange={this.valueChanged}
          />
          <input
            className="Input"
            type="tel"
            name="phone"
            placeholder="Номер Телефона"
            value={this.state.phone}
            onChange={this.valueChanged}
          />
          <Button 
            addClass='secondary'
            label='Заказать'
            click={this.orderHandler}
          />
        </form>
      </div>
    )
  }
}

export default OrderForm;