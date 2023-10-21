import {
    // REGISTER_BUSINESS_REQUEST,
    GET_REGISTER_BUSINESS_SUCCESS,
    GET_REGISTER_BUSINESS_FAIL,
    GET_REGISTER_BUSINESS_LIST_SUCCESS,
    GET_REGISTER_BUSINESS_LIST_FAIL,
    SET_LOADING,
} from './types';

import { setAlert } from '../alert';
import axios from 'axios';

// Registrar un negocio
export const registerBusinessActions = (businessData) => async (dispatch) => {
    dispatch({ type: SET_LOADING, payload: true  });

    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/Business/create/`, businessData, config);

        if (res.status === 201){
            dispatch({
                type: REGISTER_BUSINESS_SUCCESS,
                payload: res.data,
            });
        } else {
            dispatch({
                type: REGISTER_BUSINESS_FAIL,
            });
            dispatch(setAlert('Error al registrar el negocio', 'red'));
        }
    } catch (err) {
        dispatch({
            type: REGISTER_BUSINESS_FAIL,
        });

        // Puedes mostrar una alerta de error aquí
        dispatch(setAlert('Error al registrar el negocio', 'red'));
    }
};


export const get_register_business_list = () => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try{

        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/Business/list`, config)

        if(res.status === 200){
            dispatch({
                type: GET_REGISTER_BUSINESS_LIST_SUCCESS,
                payload: res.data
            });
        }else{
            dispatch({
                type: GET_REGISTER_BUSINESS_LIST_FAIL
            });
        }

    }catch(err){
        dispatch({
            type: GET_REGISTER_BUSINESS_LIST_FAIL
        });
    }
}