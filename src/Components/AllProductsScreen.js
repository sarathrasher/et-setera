import React from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import SmartSidebar from './Sidebar';
import SmartProductList from './ProductList';


let AllProductsScreen = (props) =>
  <div className='home'>
    <Navbar />
    <SmartSidebar />
    <SmartProductList props={props} />
  </div>

let SmartProductsScreen = connect(state => state)(AllProductsScreen)

export default SmartProductsScreen;
