import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

let Navbar = (props) =>
  // console.log(props) || 
  <div className='nav'>
    <NavLink activeStyle={{fontWeight: 'bold'}} to='/home'>Et-Setera</NavLink>
    <NavLink activeStyle={{fontWeight: 'bold'}} to='/about'>About</NavLink>
    <div className='cart-nav'>
      <NavLink activeStyle={{fontWeight: 'bold'}} to='/cart'>Cart</NavLink>
      <p className='item-counter'>{props.cartItems.length}</p>
    </div>
  </div>
  
let SmartNavbar = connect(state => ({cartItems: state.cartItems}))(Navbar)

export default SmartNavbar;