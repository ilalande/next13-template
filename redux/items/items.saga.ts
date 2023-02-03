import Item from '@custom-types/interfaces';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { getItemsRequest } from './items.requests';
import { getFailed, getItems, getItemsSucced } from './items.saga.actions';
import { setItems } from './items.slice';

export function* getItemsSaga() {
  try {
    const { data }: { data: Item[] } = yield call(getItemsRequest);
    yield put(getItemsSucced(data));
  } catch (error) {
    yield put(getFailed());
  }
}

// If the Saga succed put your action in the good slice
export function* getItemsSuccedSaga(action: ReturnType<typeof getItemsSucced>) {
  console.log('succedSaga');
  yield put(setItems(action.payload));
}

// If the Saga Failed do something
export function* getFailedSaga() {
  console.log('failedSaga');
  //...
}

export default function* watchItemsSagas() {
  yield all([takeLatest(getItems, getItemsSaga)]);
  yield all([takeLatest(getItemsSucced, getItemsSuccedSaga)]);
  yield all([takeLatest(getFailed, getFailedSaga)]);
}
