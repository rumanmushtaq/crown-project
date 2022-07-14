import  { cartTypes }  from "./cartTypes";
import { addItemToCart ,removeItemCart} from "./cart.utils";
const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case cartTypes.ADD_ITEM:
      return {
        ...state,
        cartItems : addItemToCart(state.cartItems, action.payload)
      }
    case cartTypes.CLEAR_ITEM_CART:
      return {
        ...state,
        cartItems : state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
      }
    case cartTypes.REMOVE_ITEM:
      return {
          ...state,
          cartItems: removeItemCart(state.cartItems, action.payload)
      };

    default:
      return state;
  }
};
  
export default cartReducer;