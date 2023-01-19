const addToCart = (data) => {
  return {
    type: "ADD_ITEM",
    payload: data,
  };
};
const increase = (id) => {
  return {
    type: "INCREASE",
    payload: id,
  };
};
const decrease = (id) => {
  return {
    type: "DECREASE",
    payload: id,
  };
};
const removeItem = (id) => {
  return {
    type: "REMOVE_ITEM",
    payload: id,
  };
};
const clear = () => {
  return {
    type: "CLEAR",
  };
};
const checkout = () => {
  return {
    type: "CHECKOUT",
  };
};

export { increase, decrease, removeItem, addToCart, clear, checkout };
