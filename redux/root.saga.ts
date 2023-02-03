import { all, fork } from 'redux-saga/effects';
import watchItemsSagas from './items/items.saga';

function* rootSaga() {
  yield all([fork(watchItemsSagas)]);
}

export default rootSaga;
