import axios from 'axios';
import {
     GET_ARTICLES_LIST_SUCCESS,
     GET_ARTICLES_LIST_FAIL,
     GET_ARTICLES_LIST_CATEGORIES_SUCCESS,
     GET_ARTICLES_LIST_CATEGORIES_FAIL,
     GET_ARTICLES_SUCCESS,
     GET_ARTICLES_FAIL,
     GET_SEARCH_ARTICLES_SUCCESS,
     GET_SEARCH_ARTICLES_FAIL,
} from "./types"

export const get_articles_list = () => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try{
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/dish/`, config);

        if (res.status === 200) {
            dispatch({
                type: GET_ARTICLES_LIST_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_ARTICLES_LIST_FAIL
            });
        }

    }catch{
        dispatch({
            type: GET_ARTICLES_LIST_FAIL
        });
    }
}

export const get_articles_list_page = (p) => async dispatch => {

    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try{
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/dish/?p=${p}`, config);

        if (res.status === 200) {
            dispatch({
                type: GET_ARTICLES_LIST_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_ARTICLES_LIST_FAIL
            });
        }

    }catch{
        dispatch({
            type: GET_ARTICLES_LIST_FAIL
        });
    }
}

export const get_articles_list_category = (category_id) => async dispatch => {

    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try{
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/dish/category/${category_id}`, config);

        if (res.status === 200) {
            dispatch({
                type: GET_ARTICLES_LIST_CATEGORIES_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_ARTICLES_LIST_CATEGORIES_FAIL
            });
        }

    }catch{
        dispatch({
            type: GET_ARTICLES_LIST_CATEGORIES_FAIL
        });
    }
}


export const get_articles_list_category_page = (category_id,p) => async dispatch => {

    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try{
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/dish/category/${category_id}?p=${p}`, config);

        if (res.status === 200) {
            dispatch({
                type: GET_ARTICLES_LIST_CATEGORIES_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_ARTICLES_LIST_CATEGORIES_FAIL
            });
        }

    }catch{
        dispatch({
            type: GET_ARTICLES_LIST_CATEGORIES_FAIL
        });
    }
}

export const get_articles = (slug) => async dispatch => {

    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/dish/${slug}`, config);

        if (res.status === 200) {
            dispatch({
                type: GET_ARTICLES_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_ARTICLES_FAIL
            });
        }
    } catch (err) {
        dispatch({
            type: GET_ARTICLES_FAIL
        });
    }
};

export const search_articles = (search_term) => async dispatch => {

    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/dish/search/${search_term}`, config);

        if (res.status === 200) {
            dispatch({
                type: GET_SEARCH_ARTICLES_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_SEARCH_ARTICLES_FAIL
            });
        }
    } catch (err) {
        dispatch({
            type: GET_SEARCH_ARTICLES_FAIL
        });
    }
};