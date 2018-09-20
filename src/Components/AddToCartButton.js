import React from 'react';
import { connect } from 'react-redux';

let AddToCartButton = (props) => {
  let addItemToCart = () => {
    console.log(props.product)
    return props.dispatch({
      type: 'ADD_TO_CART',
      product: props.product
    })
  }
    return (
      <button className='cart-button'
      onClick={addItemToCart}>
      Add To Cart
      </button>
    )
}

let SmartAddButton = connect(state=>state)(AddToCartButton);

export default SmartAddButton;