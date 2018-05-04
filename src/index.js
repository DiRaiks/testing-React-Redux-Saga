import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store';
import {Provider} from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import { history } from "./redux/history";

import App from './App.jsx';
import Registration from './containers/Registration/RegistrationContainer.jsx';

const MOUNT_NODE = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path='/' component={App}/>
                <Route path='/registration' component={Registration} />
            </Switch>
        </ConnectedRouter>
    </Provider>,
    MOUNT_NODE
);