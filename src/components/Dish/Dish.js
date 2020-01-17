import React from 'react';
import Button from '../UI/Button/Button';
import { FaPlusSquare } from 'react-icons/fa'

const Dish = props => (
  <div className="d-flex border border-dark rounded  m-1 align-items-center">
    <div className="col-4 p-3" >
      <img className="border" src={props.img} alt={props.name} width="100px"/>
    </div>
    <div className="col-4">
      <h5>{props.name}</h5>
      <p className="m-0">KGS {props.price}</p>
    </div>
    <div className="col-4 d-flex justify-content-center">
      <Button
        style={{fontSize: '40px'}}
        click={props.click}
        label={<FaPlusSquare/>}
        addClass='close'
      />
    </div>
  </div>
);

export default Dish;