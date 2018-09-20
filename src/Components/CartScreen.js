import React from 'react';
import { connect } from 'react-redux';
import SmartNavbar from './Navbar'
import ProductList from './ProductList'

let CartScreen = (props) => {
  console.log(props.cartItems);
  return (
  <div className='cart'>
  <SmartNavbar />
    <h1>Cart</h1>
    <ProductList products={props.cartItems} />
  </div>
  )
}

let SmartCart = connect(state => ({cartItems: state.cartItems}))(CartScreen)

export default SmartCart;