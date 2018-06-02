import { createStore, applyMiddleware } from "redux";
import { middleware } from "./history";

import createSagaMiddleware from 'redux-saga';
import { watcherSaga } from './saga/saga';
import { watcherRegistrationSaga } from './saga/registrationSaga';

import reducer from './reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware, middleware))
);
console.log(store.getState())

sagaMiddleware.run(watcherSaga);
sagaMiddleware.run(watcherRegistrationSaga);

export default store;
