import React, { Component } from 'react';
import { HashRouter, Route, NavLink, Switch } from 'react-router-dom';

let Navbar = (props) =>
  <div className='nav'>
    <NavLink activeStyle={{fontWeight: 'bold'}} to='/home'>Et-Setera</NavLink>
    <NavLink activeStyle={{fontWeight: 'bold'}} to='/about'>About</NavLink>
    <NavLink activeStyle={{fontWeight: 'bold'}} to='/cart'>Cart</NavLink>
      {/* <p className='item-counter'>{(props.cartItems).length()}</p> */}
  </div>

export default Navbar;