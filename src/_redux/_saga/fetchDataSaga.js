import { all, takeLatest, call, put } from 'redux-saga/effects'

export function* fetchData() {
    try {
        const result = yield fetch(`http://5c393250b9bfb20014f71477.mockapi.io/users`).then(response => response)
        console.log(result);
        yield put({
            type: `FETCH_SUCCEEDED`,
            payload: result
        })
    } catch(e) {
        yield put({
            type: `FETCH_FAILED`,
            e
        })
    }
//    try {
//       const data = yield call(fetch, `http://5c393250b9bfb20014f71477.mockapi.io/users`)
//       yield put({type: "FETCH_SUCCEEDED", data})
//    } catch (error) {
//       yield put({type: "FETCH_FAIFETCH_SUCCEEDEDLED", error})
//    }
}

function* watchFetchData() {
    yield takeLatest('FETCH_REQUESTED', fetchData)
  }

function *rootSaga() {
    yield all([
        watchFetchData(),
    ])
}

export default rootSaga;

