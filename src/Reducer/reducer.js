let updateCart = (oldState, action) => {
  let newCart = 
    oldState.cartItems.concat([action.product])
  console.log(newCart);
  return {
    ...oldState,
    cartItems: newCart
  }
}

let reducers = {
  'ADD_TO_CART': updateCart
}

let reducer = (oldState, action) => {
  let changeState = reducers[action.type];
  return changeState ? changeState(oldState, action) : oldState
}

export default reducer;