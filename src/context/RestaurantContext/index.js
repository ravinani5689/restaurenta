import { createContext } from 'react';

const RestaurantContext = createContext({
  apiResponse: { status: 'INITIAL', data: null, errorMsg: null },
  cartList: [],
  addCartItem: () => {},
  removeCartItem: () => {},
  incrementCartItemQuantity: () => {},
  decrementCartItemQuantity: () => {},
  removeAllCartItems: () => {},
});

export default RestaurantContext;
