let updateCart = (oldState, action) => {
  let newCart = [
    oldState.cartItems.concat(action.products.filter(product => product.id === oldState.products.id))
  ]
  return {
    ...oldState,
    cartItems: newCart
  }
}

let reducers = {
  'UPDATE_CART': updateCart
}

let reducer = (oldState, action) => {
  let changeState = reducers[action.type];
  return changeState ? changeState(oldState, action) : oldState
}

export default reducer;