import {
    REGISTER_BUSINESS_REQUEST,
    REGISTER_BUSINESS_SUCCESS,
    REGISTER_BUSINESS_FAIL,
    SET_ALERT, // Corregido
    REMOVE_ALERT, // Corregido
} from '../actions/types';

const initialState = {
    business: null,
    loading: false,
    alert: null,
};

export default function registerBusinessReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case REGISTER_BUSINESS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case REGISTER_BUSINESS_SUCCESS:
            return {
                ...state,
                business: payload,
                loading: false,
            };
        case REGISTER_BUSINESS_FAIL:
            return {
                ...state,
                business: null,
                loading: false,
            };
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
