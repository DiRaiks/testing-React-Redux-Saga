import { createStore, applyMiddleware } from "redux";

import createSagaMiddleware from 'redux-saga';
import { watcherSaga } from './saga'

import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watcherSaga);

export default store;