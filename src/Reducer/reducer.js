let updateCart = (oldState, action) => {
  let newCart = 
    oldState.cartItems.concat([action.product])
  console.log(newCart);
  return {
    ...oldState,
    cartItems: newCart
  }
}

let loadProducts = (oldState, action) =>
  ({
    ...oldState,
    products: action.products
  })



let reducers = {
  'ADD_TO_CART': updateCart,
  'LOAD_PRODUCTS': loadProducts,
}

let reducer = (oldState, action) => {
  let changeState = reducers[action.type];
  return changeState ? changeState(oldState, action) : oldState
}

export default reducer;