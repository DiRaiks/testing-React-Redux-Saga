import { createStore, applyMiddleware } from "redux";
import { middleware } from "./history";

import createSagaMiddleware from 'redux-saga';
import { watcherSaga } from './saga/saga';
import { watcherRegistrationSaga } from './saga/registrationSaga';

import rootReducer from './reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware, middleware))
);

sagaMiddleware.run(watcherSaga);
sagaMiddleware.run(watcherRegistrationSaga);

export default store;