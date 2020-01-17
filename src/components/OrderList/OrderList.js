import React from 'react';
import Button from '../UI/Button/Button';
import { FaMinusSquare } from 'react-icons/fa'

const OrderList = props => (
  <div className='d-flex justify-content-between align-items-center mb-2'>
    <p className='m-0 col-5'>{props.name} x {props.qty} шт</p>
    <p className='m-0 col-5'>{props.price * props.qty} KGS </p> 
    <div className='col-2'>
      <Button
        style={{fontSize: '40px'}}
        addClass='close'
        label={<FaMinusSquare/>}
        click={props.click}
      />
    </div>
  </div>
)

export default OrderList;