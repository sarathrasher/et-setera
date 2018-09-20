import React from 'react'
import CartProductPost from './CartProductPost'

let CartProductList = (props) =>
  <ul className='product-list'>{props.products.map(product => 
    <CartProductPost product={product} key={product.id} />)}
  </ul>

export default CartProductList;