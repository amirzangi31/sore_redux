const shorthen = (data) => {
  const text = data.split(" ");

  if (text.length > 1) {
    const result = `${text[0]} ${text[1]}`;
    return result;
  } else {
    return data;
  }
};

const isInCart = (data, id) => {
  const result = data.selectedItems.find((item) => item.id === id);
  return result;
};

const productCount = (data, id) => {
  const count = data.selectedItems.findIndex((item) => item.id === id);
  if (count === -1) {
    return false;
  } else {
    const result = data.selectedItems[count].quantity;
    return result;
  }
};

export { shorthen, isInCart, productCount };
