import React from 'react'
import { connect } from 'react-redux';

let ProductPost = (props) =>
  <li class='product-post'>
    <h1 class='product-title'>{props.product.title}</h1>
    <img alt={props.product.title}className='post-image' src={props.product.imageURL}></img>
    <p class='post-description'>{props.product.description}</p>
    <p class='product-price'>{props.product.price}</p>
  </li>

let SmartProductPost = connect(state => state)(ProductPost);

export default SmartProductPost;