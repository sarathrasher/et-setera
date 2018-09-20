import React from 'react';
import { connect } from 'react-redux';
import SmartNavbar from './Navbar'
import CartProductList from './CartProductList'
import cartTotal from '../Actions/cartTotal'

let CartScreen = (props) => {
  console.log(props.cartItems);
  return (
  <div className='cart'>
  <SmartNavbar />
    <h1>Cart</h1>
    <CartProductList products={props.cartItems} />
    <p className='total'>Total: ${cartTotal(props.cartItems)}</p>
  </div>
  )
}

let SmartCart = connect(state => ({cartItems: state.cartItems}))(CartScreen)

export default SmartCart;