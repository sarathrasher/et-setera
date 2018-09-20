import React from 'react';
import SmartNavbar from './Navbar';
import SmartSidebar from './Sidebar';
import { connect } from 'react-redux';
import ProductDetailPost from './ProductDetailPost'

let ProductDetailScreen = (props) => 
  <div class='product-detail-screen'>
    <SmartNavbar />
    <SmartSidebar />
    <ProductDetailPost product={props.product} />
  </div>


let SmartDetailScreen = connect((state, props) => ({product: state.products.find((product) => product.id === props.match.params.id),
}))(ProductDetailScreen);

export default SmartDetailScreen;