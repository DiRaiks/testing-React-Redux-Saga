import {combineReducers} from 'redux';
import reducer from './reducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
    reducer,
    router: routerReducer
})

export default rootReducer;