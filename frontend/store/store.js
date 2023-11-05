import { configureStore } from '@reduxjs/toolkit';
import {
  reducerPath as apiReducerPath,
  reducer as apiReducer,
  middleware as apiMiddleware
} from './services/api';

export function makeStore() {
  return configureStore({
    reducer: {
      [apiReducerPath]: apiReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiMiddleware),
  });
}

const store = makeStore();

export default store;
