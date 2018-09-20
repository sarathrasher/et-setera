import React from 'react';
import SmartAddButton from './AddToCartButton'

let ProductDetailPost = (props) =>
  <li className='product-post'>
    <h1 className='product-title'>{props.product.title}</h1>
    <img 
    alt={props.title} 
    className='post-image' 
    src={props.product.imageURL}>
    </img>
    <p className='post-description'>{props.product.description}</p>
    <p className='product-price'>Cost: ${props.product.price}</p>
    <SmartAddButton product={props.product} />
  </li>

export default ProductDetailPost;