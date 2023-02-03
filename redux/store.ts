import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import itemsSlice from './items/items.slice';
import rootSaga from './root.saga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    items: itemsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
