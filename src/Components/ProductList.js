import React from 'react'
import { connect } from 'react-redux';
import SmartProductPost from './ProductPost'

let ProductList = (props) =>
  <ul className='product-list'>{props.products.map(product => 
    <SmartProductPost product={product} key={product.id} />)}
  </ul>

let SmartProductList = connect(state => state)(ProductList);

export default SmartProductList;