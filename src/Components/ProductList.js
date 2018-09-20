import React from 'react'
import ProductPost from './ProductPost'

let ProductList = (props) =>
  <ul className='product-list'>{props.products.map(product => 
    <ProductPost product={product} key={product.id} />)}
  </ul>

export default ProductList;