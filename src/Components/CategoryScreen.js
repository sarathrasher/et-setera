import React from 'react';
import SmartNavbar from './Navbar';
import SmartSidebar from './Sidebar';
import { connect } from 'react-redux';
import ProductList from './ProductList';

let CategoryScreen = (props) => {
  let filteredProducts = props.products.filter(product => product.categoryId === props.category.id.toString());
  console.log(filteredProducts)
    return (
    <div className='category-screen'>
      <SmartNavbar />
      <SmartSidebar />
      <h1 className='category-header'>{props.category.title}</h1>
      <ProductList products={filteredProducts} />
    </div>
    )
}

let SmartCategoryScreen = connect((state, props) => ({category: state.categories.find((category) => category.slug === props.match.params.slug),
products: state.products
}))(CategoryScreen);

export default SmartCategoryScreen;