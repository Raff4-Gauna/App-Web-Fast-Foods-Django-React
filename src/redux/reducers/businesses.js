import {
    GET_BUSINESS_LIST_SUCCESS,
    GET_BUSINESS_LIST_FAIL,
    GET_BUSINESS_SUCCESS,
    GET_BUSINESS_FAIL,
} from '../actions/types';


const initialState = {
    businesses: null,
    count: null,
    next: null,
    previous: null,
    business: null, 
};


export default function businesses(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case GET_BUSINESS_LIST_SUCCESS:
            return {
                ...state,
                businesses: payload.businesses,
                count: payload.count,
                next: payload.next,
                previous: payload.previous,
            }
        case GET_BUSINESS_LIST_FAIL:
            return {
                ...state,
                businesses: null,  
            };

        case GET_BUSINESS_SUCCESS: // Maneja el éxito al obtener los detalles de un negocio individual
            return {
                ...state,
                business: payload.business  // Almacena los detalles del negocio individual
            };
            case GET_BUSINESS_FAIL:  // Maneja la falla al obtener los detalles de un negocio individual
            return {
                ...state,
                business: null  // Limpia los detalles del negocio en caso de error
            };
        default:
            return state
    }
}
