import Axios from 'axios';
import {
  COMPANY_LIST_FAIL,
  COMPANY_LIST_REQUEST,
  COMPANY_LIST_SUCCESS,
} from '../constants/companyConstants';

export const listCompanies = () => async (dispatch) => {
  dispatch({
    type: COMPANY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get('https://secure-lake-28172.herokuapp.com/:3001/companies');
    dispatch({ type: COMPANY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: COMPANY_LIST_FAIL, payload: error.message });
  }
};
