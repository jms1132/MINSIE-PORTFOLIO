import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
} from 'redux-persist';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import storage from 'redux-persist/lib/storage';
import device from './device/Device';
import pagePosition from './pagePosition/PagePosition';

const rootPersistConfig = {
  key: 'root',
  storage,
  stateReconciler: hardSet,
};

const devicePersistConfig = {
  key: 'device',
  storage,
  whitelist: ['desktopMode'],
  stateReconciler: hardSet,
};

const pagePositionPersistConfig = {
  key: 'pagePosition',
  storage,
  stateReconciler: hardSet,
};

const rootReducer = combineReducers({
  device: persistReducer<ReturnType<typeof device>>(
    devicePersistConfig,
    device
  ),
  pagePosition: persistReducer<ReturnType<typeof pagePosition>>(
    pagePositionPersistConfig,
    pagePosition
  ),
});

const persistedReducer = persistReducer<ReturnType<typeof rootReducer>>(
  rootPersistConfig,
  rootReducer
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        isSerializable: () => true,
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type rootState = ReturnType<typeof store.getState>;
