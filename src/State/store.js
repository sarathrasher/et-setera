import { createStore } from 'redux';
import reducer from '../Reducer/reducer'
import products from '../Data/products';
import categories from '../Data/categories';

let initialState = {
  products: products,
  categories: categories,
  cartItems: [],
};

let store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;
