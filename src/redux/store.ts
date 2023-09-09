import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { persistedUserReducer } from './user/slices/userFulfilled';
import { isRefreshingReducer } from './user/slices/userRefreshing';

export const store = configureStore({
  reducer: {
    user: persistedUserReducer,
    isRefreshing: isRefreshingReducer,
  },
  middleware: (gDM) =>
    gDM({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
