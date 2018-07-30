import { call, put, takeLatest, all } from 'redux-saga/effects';
import authMock from '../utils/Auth'


function* authorize({payload: {username, password}})
{
    try {
        const token = yield call(authMock, username, password);
        yield put({type: 'AUTH_SUCCESS', token: token});
    } catch (error) {
        let message;
        switch (error.status) {
            case 500: message = 'Internal Server Error'; break;
            case 401: message = 'Invalid credentials'; break;
            default: message = 'Something went wrong';
        }
        yield put({ type: 'AUTH_FAILURE', error: message });
    }
}

function* watchAuthorize() {
    yield takeLatest('AUTH_REQUEST', authorize);
}


function* fetchUsers() {

    const json = yield fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json(), );    
  
    yield put({ type: "FETCH_USERS_SUCCESS", json: json.users, });
}
  
function* watchFetchUsers() {
    yield takeLatest('GET_USERS', fetchUsers)
}


function* rootSaga() {
    yield all([
        watchAuthorize(),
        watchFetchUsers()
    ])
}
  
export default rootSaga;