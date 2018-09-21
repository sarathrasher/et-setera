import React, { Component } from 'react';
import SmartNavbar from './Navbar';
import SmartSidebar from './Sidebar';
import ProductList from './ProductList';
import { API_URL } from '../env';
import FetchProducts from './FetchProducts';

let AllProductsScreen = (props) =>
  <div className='home'>
    <SmartNavbar />
    <SmartSidebar />
    <ProductList products={props.products} />
  </div>



export default AllProductsScreen;
