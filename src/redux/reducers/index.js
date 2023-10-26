import { combineReducers } from 'redux';
import Auth from './auth';
import Alert from './alerts';
import businesses from './businesses';
import categories from './categories';

export default combineReducers({
    Auth,
    Alert,
    businesses,
    categories,
})