const initialState = {
  selectedItems: [],
  total: 0,
  itemsCounter: 0,
  checkout: false,
};

const sumItems = items =>{
    const total = items.reduce((total , product) => total + product.quantity * product.price , 0)
    const itemsCounter = items.reduce((total , product) => total + product.quantity , 0)
    return {total , itemsCounter}
}


const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_ITEM":
      if (!state.selectedItems.find((item) => item.id === payload.id)) {
        state.selectedItems.push({
          ...payload,
          quantity: 1,
        });
      }
      return {
        ...state,
        selectedItems: [...state.selectedItems],
        ...sumItems(state.selectedItems)
      };
    case "INCREASE":
      const indexI = state.selectedItems.findIndex(
        (item) => item.id === payload
      );
      state.selectedItems[indexI].quantity++;
      return {
        ...state,
        ...sumItems(state.selectedItems)
      };
    case "DECREASE":
      const indexD = state.selectedItems.findIndex(
        (item) => item.id === payload
      );
      state.selectedItems[indexD].quantity--;
      return {
        ...state,
        ...sumItems(state.selectedItems)
      };

    case "REMOVE_ITEM":
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== payload
      );
      return {
        ...state,
        selectedItems: [...newSelectedItems],
        ...sumItems(newSelectedItems)
      };
    default:
      return state;
  }
};

export default cartReducer;
