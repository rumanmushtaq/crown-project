import  { cartTypes }  from "./cartTypes";

export const toggleCartHidden = () => ({
    type: cartTypes.TOGGLE_CART_HIDDEN,
  });
  
  export const addItem = item => ({
    type: cartTypes.ADD_ITEM,
    payload: item
  });
  export const removeItem = item => ({
    type: cartTypes.REMOVE_ITEM,
    payload: item
  });

  export const clearItemFromCart = item => ({
    type: cartTypes.CLEAR_ITEM_CART,
    payload: item
  });
  