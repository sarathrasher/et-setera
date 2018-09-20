import React from 'react';
import SmartNavbar from './Navbar';
import SmartSidebar from './Sidebar';
import { connect } from 'react-redux';

let ProductDetailScreen = (props) =>
  <div class='product-detail-screen'>
    <SmartNavbar />
    <SmartSidebar />
  </div>

let SmartProductDetailScreen = connect(state => state)(ProductDetailScreen)

export default SmartProductDetailScreen