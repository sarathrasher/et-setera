import React from 'react';
import Navbar from './Navbar';
import SmartSidebar from './Sidebar';
import { connect } from 'react-redux';

let CategoryScreen = (props) => {
    return (
    <div className='category-screen'>
      <Navbar />
      <SmartSidebar />
      <h1 className='category-header'>{props.category.title}</h1>
    </div>
    )
}

let SmartCategoryScreen = connect((state, props) => ({category: state.categories.find((category) => category.slug === props.match.params.slug)
}))(CategoryScreen);

export default SmartCategoryScreen;