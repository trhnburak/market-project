import Axios from 'axios';
import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  TAGS_LIST_FAIL,
  TAGS_LIST_REQUEST,
  TAGS_LIST_SUCCESS,
} from '../constants/productConstants';

export const listProducts = (currentPage) => async (dispatch) => {
  dispatch({
    type: PRODUCT_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`http://localhost:3000/items?_page=${currentPage}&_limit=16`);
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
  }
};

export const listTags = () => async (dispatch) => {
  dispatch({
    type: TAGS_LIST_REQUEST,
  });
  try {
    const { data }= await Axios.get(`http://localhost:3000/items`);
    dispatch({ type: TAGS_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: TAGS_LIST_FAIL, payload: error.message });
  }
};