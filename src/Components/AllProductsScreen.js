import React from 'react';
import { connect } from 'react-redux';
import SmartNavbar from './Navbar';
import SmartSidebar from './Sidebar';
import ProductList from './ProductList';

let AllProductsScreen = (props) =>
  <div className='home'>
    <SmartNavbar />
    <SmartSidebar />
    <ProductList products={props.products} />
  </div>

let SmartProductsScreen = connect(state => state)(AllProductsScreen)

export default SmartProductsScreen;
