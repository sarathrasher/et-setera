let cartTotal = (props) => {
  let sum = 0;
  for (let i = 0; i < props.length; i++) {
    sum += props[i].price;
  }
  return sum;
}

export default cartTotal;