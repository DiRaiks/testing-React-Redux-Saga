import {takeLatest, takeEvery, call, put, take} from 'redux-saga/effects';
import * as actionTypes from '../constants/actionTypes';
// import axios from 'axios';
import {users} from '../../db';

//watcher
export function* watcherRegistrationSaga() {
    const action = yield take(actionTypes.REGISTRATION_USER);
    yield workerSaga(action);
}

function checkUser(action) {
    return users.forEach(dbUser => {
        if (dbUser.login === action.user.login) {
            throw new Error('user already have')
        } else {
            return dbUser;
        }
    })
}

function* workerSaga(action) {
    try {
        yield checkUser(action);

        yield put({
            type: actionTypes.REGISTRATION_USER_SUCCESS
        })
    } catch (error) {
        yield put({
            type: actionTypes.REGISTRATION_USER_FAIL,
            error
        })
    }
}
