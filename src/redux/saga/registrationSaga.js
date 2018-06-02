import {takeAll, takeLatest, takeEvery, call, put, take} from 'redux-saga/effects';
import * as actionTypes from '../constants/actionTypes';
// import axios from 'axios';
import {users} from '../../db';

function checkUser(newUser) {
    let succes = false;
    users.forEach(user => {
        if (user.login === newUser.login) {
            throw new Error('user already exist')
        } else {
            users.push(newUser);
            succes = true;
        }
    })
    return succes;
}

function* authorizeFunc(newUser) {
    try {
        const success = yield call(checkUser, newUser);
        yield put({type: actionTypes.REGISTRATION_USER_SUCCESS});
        return success;
    } catch(error) {
        yield put({type: actionTypes.REGISTRATION_USER_FAIL, error: error.message});
    }
}

export function* watcherRegistrationSaga() {
    while (true) {
        const {newUser} = yield take(actionTypes.REGISTRATION_USER);
        const authorize = yield call(authorizeFunc, newUser);
        if (authorize) {
            yield take('LOGOUT')
        }
    }
}
