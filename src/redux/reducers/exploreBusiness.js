import {
    GET_EXPLORE_SUCCESS,
    GET_EXPLORE_FAIL,
} from './types';

const initialState = {
    explore: null
};

export default function explore(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case GET_EXPLORE_SUCCESS:
            return {
                ...state,
                explore: payload.explore
            };
        case GET_EXPLORE_FAIL:
            return {
                ...state,
                explore: null
            }
        default:
            return state
    };
}