import axios from 'axios';
import {
    GET_BUSINESS_LIST_SUCCESS,
    GET_BUSINESS_LIST_FAIL,
    GET_BUSINESS_SUCCESS,
    GET_BUSINESS_FAIL,
} from './types';

export const get_business_list = () => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/business/list`, config);

        if (res.status === 200) {
            dispatch({
                type: GET_BUSINESS_LIST_SUCCESS,
                payload: {
                    businesses: res.data.results.businesses,
                    count: res.data.count,
                    next: res.data.next,
                    previous: res.data.previous
                }
            });            
        } else {
            dispatch({
                type: GET_BUSINESS_LIST_FAIL
            });
        }
    } catch (err) {
        dispatch({
            type: GET_BUSINESS_LIST_FAIL
        });
    }
};


export const get_business = (slug) => async dispatch => {
    const config = {
      headers: {
        'Accept': 'application/json'
      }
    };
  
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/business/${slug}`, config);
  
      if (res.status === 200) {
        dispatch({
          type: GET_BUSINESS_SUCCESS,
          payload: res.data
        });
      } else {
        dispatch({
          type: GET_BUSINESS_FAIL
        });
      }
    } catch (err) {
      dispatch({
        type: GET_BUSINESS_FAIL
      });
    }
  };
  

