import React from 'react'
import { HashRouter, Route, NavLink, Switch } from 'react-router-dom';
import SmartProductsScreen from '../Components/AllProductsScreen';
import SmartCategoryScreen from '../Components/CategoryScreen';
import SmartProductDetailScreen from '../Components/ProductDetailScreen'
import About from '../Components/About'
import SmartCart from '../Components/CartScreen'

let Router = (props) =>
  <HashRouter>
    <div>
      <Switch>
        <Route exact path='/home' component={SmartProductsScreen} />
        <Route path='/cart' component={SmartCart}></Route>
        <Route exact path='/about' component={About} />
        <Route exact path='/category/:slug' component={SmartCategoryScreen} />
        <Route path='/product/:id' component={SmartProductDetailScreen} />
      </Switch>
    </div>
  </HashRouter>

export default Router;