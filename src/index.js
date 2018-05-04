import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import store from './redux/store';
import {Provider} from 'react-redux';
import { Route } from 'react-router';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import { history } from "./redux/history";

const MOUNT_NODE = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Route exact path='/' component={App}/>
            </div>
        </ConnectedRouter>
    </Provider>,
    MOUNT_NODE
);