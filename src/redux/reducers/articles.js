import {
    GET_ARTICLES_LIST_SUCCESS,
    GET_ARTICLES_LIST_FAIL,
    GET_ARTICLES_LIST_CATEGORIES_SUCCESS,
    GET_ARTICLES_LIST_CATEGORIES_FAIL,
    GET_ARTICLES_SUCCESS,
    GET_ARTICLES_FAIL,
    GET_SEARCH_ARTICLES_SUCCESS,
    GET_SEARCH_ARTICLES_FAIL
} from '../actions/types';

const initialState = {
    articles_list: null,
    articles_list_category: null,
    filtered_dishes: null,
    dishes: null,
    count: null,
    next: null,
    previous: null
};

export default function articles(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case GET_ARTICLES_LIST_CATEGORIES_SUCCESS:
            return {
                ...state,
                articles_list_category: payload.results.dishes,
                count: payload.count,   
                next: payload.next,
                previous: payload.previous,
            }
        case GET_ARTICLES_LIST_CATEGORIES_FAIL:
            return {
                ...state,
                articles_list_category: null,
                count: null,
                next: null,
                previous: null,
            }
        case GET_ARTICLES_LIST_SUCCESS:
            return {
                ...state,
                articles_list: payload.results.dishes,
                count: payload.count,
                next: payload.next,
                previous: payload.previous,
            }
        case GET_ARTICLES_LIST_FAIL:
            return {
                ...state,
                articles_list: null,
                count: null,
                next: null,
                previous: null,
            }
        case GET_ARTICLES_SUCCESS:
            return {
                ...state,
                dishes: payload.dishes
            }
        case GET_ARTICLES_FAIL:
            return {
                ...state,
                dishes: null
            }
        case GET_SEARCH_ARTICLES_SUCCESS:
            return {
                ...state,
                filtered_dishes: payload.filtered_dishes
            }
        case GET_SEARCH_ARTICLES_FAIL:
            return {
                ...state,
                filtered_dishes: null
            }
        default:
            return state
    }
}