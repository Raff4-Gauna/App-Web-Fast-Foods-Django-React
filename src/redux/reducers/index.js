import { combineReducers } from 'redux';
import articles from './articles';
import categories from './categories';
import Auth from './auth';
import Alert from './alerts';
import registerBusinessReducer from './registerBusinessRed/registerBusinessReduc';


export default combineReducers({
    Auth,
    Alert,
    articles,
    categories,
    registerBusinessReducer,
})