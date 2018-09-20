import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

let Sidebar = (props) => {
  console.log(props);
  return (
  <div className='side-bar'>
  {props.categories.map(category =>
      <NavLink 
      activeStyle={{fontWeight: 'bold'}}
      key={category.id} 
      to={`/category/${category.slug}`}>{category.title}</NavLink>
  ) }
  </div>
  )
}

let SmartSidebar = withRouter(connect(state => ({categories: state.categories}))(Sidebar));

export default SmartSidebar;
  
