import React from 'react';

let CartProductPost = (props) =>
  <li className='product-post'>
    <h1 className='product-title'>{props.product.title}</h1>
    <img 
    alt={props.product.title} 
    className='post-image' 
    src={props.product.imageURL}>
    </img>
    <p className='product-price'>Cost: ${props.product.price}</p>
  </li>

export default CartProductPost;