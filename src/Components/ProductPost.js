import React from 'react'

let ProductPost = (props) =>
  <li className='product-post'>
    <h1 className='product-title'>{props.product.title}</h1>
    <img 
    alt={props.product.title} 
    className='post-image' 
    src={props.product.imageURL}>
    </img>
    <p className='post-description'>{props.product.description}</p>
    <p className='product-price'>Cost: {props.product.price}</p>
  </li>


export default ProductPost;