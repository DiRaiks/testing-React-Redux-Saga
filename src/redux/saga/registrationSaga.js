import {takeAll, takeLatest, takeEvery, call, put, take} from 'redux-saga/effects';
import * as actionTypes from '../constants/actionTypes';
// import axios from 'axios';
import {users} from '../../db';

function checkUser(login, password) {
    console.log('checkUser')
    let newUser = false;
    users.forEach(user => {
        if (user.login === login) {
            throw new Error('user already exist')
        } else {
            newUser = true;
        }
    })
    if (newUser) return true;
}

function* authorizeFunc(login, password) {
    console.log('authorize')
    try {
        const success = yield call(checkUser, login, password);
        yield put({type: actionTypes.REGISTRATION_USER_SUCCESS});
        return success;
    } catch(error) {
        yield put({type: actionTypes.REGISTRATION_USER_FAIL, error});
    }
}

export function* watcherRegistrationSaga() {
    while (true) {
        const {login, password} = yield take(actionTypes.REGISTRATION_USER);
        console.log('-->>>>', login, password, authorizeFunc)
        const authorize = yield call(authorizeFunc, login, password);
        if (authorize) {
            yield take('LOGOUT')
        }
    }
}




