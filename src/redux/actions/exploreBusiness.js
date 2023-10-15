import axios from 'axios';
import {
    GET_EXPLORE_SUCCESS,
    GET_EXPLORE_FAIL,
} from "./types"

export const get_explore = () => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try{
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/business/negocios/`, config);

        if (res.status === 200) {
            dispatch({
                type: GET_EXPLORE_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_EXPLORE_FAIL
            });
        }

    }catch{
        dispatch({
            type: GET_EXPLORE_FAIL
        });
    }
}


// export const get_articles_list_category = (category_id) => async dispatch => {


//     const config = {
//         headers: {
//             'Accept': 'application/json'
//         }
//     };

//     try{
//         const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/dish/category/${category_id}`, config);

//         if (res.status === 200) {
//             dispatch({
//                 type: GET_ARTICLES_LIST_CATEGORIES_SUCCESS,
//                 payload: res.data
//             });
//         } else {
//             dispatch({
//                 type: GET_ARTICLES_LIST_CATEGORIES_FAIL
//             });
//         }

//     }catch{
//         dispatch({
//             type: GET_ARTICLES_LIST_CATEGORIES_FAIL
//         });
//     }
// }


// export const get_articles_list_category_page = (category_id,p) => async dispatch => {

//     const config = {
//         headers: {
//             'Accept': 'application/json'
//         }
//     };

//     try{
//         const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/dish/category/${category_id}?p=${p}`, config);

//         if (res.status === 200) {
//             dispatch({
//                 type: GET_ARTICLES_LIST_CATEGORIES_SUCCESS,
//                 payload: res.data
//             });
//         } else {
//             dispatch({
//                 type: GET_ARTICLES_LIST_CATEGORIES_FAIL
//             });
//         }

//     }catch{
//         dispatch({
//             type: GET_ARTICLES_LIST_CATEGORIES_FAIL
//         });
//     }
// }

// export const get_explore = (slug) => async dispatch => {

//     const config = {
//         headers: {
//             'Accept': 'application/json'
//         }
//     };

//     try {
//         const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/dish/${slug}`, config);

//         if (res.status === 200) {
//             dispatch({
//                 type: GET_ARTICLES_SUCCESS,
//                 payload: res.data
//             });
//         } else {
//             dispatch({
//                 type: GET_ARTICLES_FAIL
//             });
//         }
//     } catch (err) {
//         dispatch({
//             type: GET_ARTICLES_FAIL
//         });
//     }
// };

// export const search_explore = (search_term) => async dispatch => {

//     const config = {
//         headers: {
//             'Accept': 'application/json'
//         }
//     };

//     try {
//         const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/dish/search/${search_term}`, config);

//         if (res.status === 200) {
//             dispatch({
//                 type: GET_SEARCH_ARTICLES_SUCCESS,
//                 payload: res.data
//             });
//         } else {
//             dispatch({
//                 type: GET_SEARCH_ARTICLES_FAIL
//             });
//         }
//     } catch (err) {
//         dispatch({
//             type: GET_SEARCH_ARTICLES_FAIL
//         });
//     }
// };

