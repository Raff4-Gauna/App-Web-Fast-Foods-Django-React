import { combineReducers } from 'redux';
import Auth from './auth';
import Alert from './alerts';
import business from './registerBusinessRed/registerBusinessListReduc'


export default combineReducers({
    Auth,
    Alert,
    business,
})