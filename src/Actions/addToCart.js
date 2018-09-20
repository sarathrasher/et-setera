let addItemToCart = (props) =>
  props.dispatch({
    type: 'ADD_TO_CART',
    product: props.product
  })

export default addItemToCart