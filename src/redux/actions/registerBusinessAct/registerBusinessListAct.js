import axios from 'axios';

import {
    GET_BUSINESS_LIST_SUCCESS,
    GET_BUSINESS_LIST_FAIL,
} from '../registerBusinessAct/types';

export const get_business_act_list = () => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try{

        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/Business/list`, config)

        if(res.status === 200){
            dispatch({
                type: GET_BUSINESS_LIST_SUCCESS,
                payload: res.data
            });
        }else{
            dispatch({
                type: GET_BUSINESS_LIST_FAIL
            });
        }

    }catch(err){
        dispatch({
            type: GET_BUSINESS_LIST_FAIL
        });
    }
};
