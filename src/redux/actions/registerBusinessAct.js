import {
    // REGISTER_BUSINESS_REQUEST,
    REGISTER_BUSINESS_SUCCESS,
    REGISTER_BUSINESS_FAIL,
    SET_LOADING,
} from './types';

import { setAlert } from './alert';
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
