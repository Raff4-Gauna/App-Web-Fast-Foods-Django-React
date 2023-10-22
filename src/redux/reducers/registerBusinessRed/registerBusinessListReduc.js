import {
    GET_BUSINESS_LIST_SUCCESS,
    GET_BUSINESS_LIST_FAIL,
} from '../registerBusinessRed/types';


const initialState = {
    business_list: null,
};


export default function business_list(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case GET_BUSINESS_LIST_SUCCESS:
            return {
                ...state,
                business_list: payload.business_list
            }
        case GET_BUSINESS_LIST_FAIL:
            return {
                ...state,
                business_list: null
            }
        default:
            return state
    }
};