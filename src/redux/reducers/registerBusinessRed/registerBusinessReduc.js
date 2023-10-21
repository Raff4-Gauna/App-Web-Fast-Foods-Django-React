import {
    GET_REGISTER_BUSINESS_SUCCESS,
    GET_REGISTER_BUSINESS_FAIL,
    GET_REGISTER_BUSINESS_LIST_SUCCESS,
    GET_REGISTER_BUSINESS_LIST_FAIL,
    REGISTER_BUSINESS_REQUEST,
    REGISTER_BUSINESS_SUCCESS,
    REGISTER_BUSINESS_FAIL,
    SET_ALERT, // Corregido
    REMOVE_ALERT, // Corregido
} from '../../reducers/registerBusinessRed/types';


const initialState = {
    business_list: null,
    count: null,
    next: null,
    previous: null,
    business: null,
    loading: false,
    alert: null,
};

export default function registerBusinessReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        // case REGISTER_BUSINESS_REQUEST:
        //     return {
        //         ...state,
        //         loading: true,
        //     };
        // case REGISTER_BUSINESS_SUCCESS:
        //     return {
        //         ...state,
        //         business: payload,
        //         loading: false,
        //     };
        // case REGISTER_BUSINESS_FAIL:
        //     return {
        //         ...state,
        //         business: null,
        //         loading: false,
        //     };
        case GET_REGISTER_BUSINESS_LIST_SUCCESS:
            return {
                ...state,
                business_list: payload.businesses,
                count: payload.count,
                next: payload.next,
                previous: payload.previous,
            }
        case GET_REGISTER_BUSINESS_LIST_FAIL:
            return {
                ...state,
                business_list: null, 
                count: null,
                next: null,
                previous: null,
            }
        case SET_ALERT: // Corregido
            return {
                ...state,
                alert: payload,
            };
        case REMOVE_ALERT: // Corregido
            return {
                ...state,
                alert: null,
            };
        default:
            return state;
    }
}
