import React from 'react';
import Navbar from './Navbar';
import SmartSidebar from './Sidebar';
import { connect } from 'react-redux';

let ProductDetailScreen = (props) =>
  <div class='product-detail-screen'>
    <Navbar />
    <SmartSidebar />
  </div>

let SmartProductDetailScreen = connect(state => state)(ProductDetailScreen)

export default SmartProductDetailScreen