import { createStore, applyMiddleware } from "redux";
import reducer from './reducers/reducer';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;