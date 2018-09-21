import React from 'react';
import { connect } from 'react-redux';
import { API_URL } from '../env';
import AllProductsScreen from './AllProductsScreen'

// let fetchProducts = (Component) =>
  class FetchProducts extends React.Component {
    componentDidMount() {
      fetch(API_URL + '/product') 
        .then(res => res.json()) 
        .then(products => {
          this.props.dispatch({
            type: 'LOAD_PRODUCTS',
            products: products
          });
        });
    }
    render() {
      console.log(API_URL)
      return <AllProductsScreen {...this.props} />
    }
  }

let SmartProductsScreen = connect(state => state)(FetchProducts)

export default SmartProductsScreen;