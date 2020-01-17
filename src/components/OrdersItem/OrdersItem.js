import React from "react";

const OrdersItem = (props) => {

  const dishes = props.dishes && Object.keys(props.dishes).map(dishName => (
    <span className="pl-3" key={dishName}>{dishName} - <b>{props.dishes[dishName]}</b>;</span>
  ))

  const customer = props.customer && Object.keys(props.customer).map(param => (
    <span className="pl-3" key={param}>{param} - <i> {props.customer[param]};</i></span>
  ))

  return(
    <div className="container">
      <div className="card mb-2">
        <div className="card-header">
        Order #: {props.id}
        </div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>Dishes: {dishes}</p>
            <p>Customer: 
              {customer}</p>
          </blockquote>
        </div>
      </div>
    </div>
  )
}

export default OrdersItem;