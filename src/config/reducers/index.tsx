import {ICart, IOffer, IProduct} from '../types';
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  LOAD_CART,
  LOAD_OFFERS,
  LOAD_PRODUCTS,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
} from '../constants';

export const cartReducer = (state: Array<ICart> = [], action: any): any => {
  switch (action.type) {
    case LOAD_CART:
      return [...action.payload.cartItems];

    case ADD_TO_CART:
      return (
        !state.find(item => item.name === action.payload.cartItem.name) && [
          ...state,
          action.payload.cartItem,
        ]
      );

    case REMOVE_FROM_CART:
      return state.filter(item => item.id === action.payload.id);

    default:
      return state;
  }
};

export const offersReducer = (state: Array<IOffer> = [], action: any): any => {
  switch (action.type) {
    case LOAD_OFFERS:
      return [...action.payload.offers];

    default:
      return state;
  }
};

export const productsReducer = (
  state: Array<IProduct> = [],
  action: any,
): any => {
  switch (action.type) {
    case LOAD_OFFERS:
      return [...action.payload.offers];

    case LOAD_PRODUCTS:
      return [...action.payload.products];

    case ADD_PRODUCT:
      return state.concat(action.payload.product);

    case REMOVE_PRODUCT:
      return state.filter(product => product.id === action.payload.id);

    default:
      return state;
  }
};
