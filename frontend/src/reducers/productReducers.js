const {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  TAGS_LIST_REQUEST,
  TAGS_LIST_SUCCESS,
  TAGS_LIST_FAIL,
} = require("../constants/productConstants");

export const productListReducer = (
  state = { loading: true, products: [] },
  action
) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true };
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const tagListReducer = (
  state = { loading: true, tags: [] },
  action
) => {
  switch (action.type) {
    case TAGS_LIST_REQUEST:
      return { loading: true };
    case TAGS_LIST_SUCCESS:
      return { loading: false, tags: action.payload.tags };
    case TAGS_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
