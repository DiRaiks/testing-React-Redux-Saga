import {combineReducers} from 'redux';
import reducer from './reducer';
import { routerReducer } from 'react-router-redux';
import registrationReducer from './registration';

const rootReducer = combineReducers({
    reducer,
    registrationReducer,
    router: routerReducer
})

export default rootReducer;
