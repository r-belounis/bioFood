import { takeEvery, call, fork, put } from 'redux-saga/effects';
import * as actions from '../actions/data';
import * as api from '../api/data';

// create a generator function
function* fetchData() {
    // try to make the api call
    try {
        // yield the api responsse into data
        const response = yield call(api.getData());
        const data = yield response.json();
        yield put(actions.getDataSuccess( {data: data.data} ))}

    catch(err) {
        console.log(err);
    }
}

// create watcher of fetchData function
function* watchFetchData() {
    yield takeEvery(actions.Types.GET_DATA_REQUEST, fetchData);
}

const DataSagas = [
    fork(watchFetchData)
];

// export default DataSagas;