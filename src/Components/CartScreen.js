import React from 'react';
import { connect } from 'react-redux';

let Cart = (props) => 
  <div className='cart'>
    <h1>Cart</h1>
  </div>

let SmartCart = connect(state => ({cartItems: state.cartItems}))(Cart)

export default SmartCart;