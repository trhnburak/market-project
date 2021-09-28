import Axios from 'axios';
import { CART_ADD_ITEM } from '../constants/cartConstants';

export const addToCart = (added, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`https://secure-lake-28172.herokuapp.com:3000/items/${added}`);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      name: data.name,
      price: data.price,
      product: data.added,
      qty,
    },
  });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};
