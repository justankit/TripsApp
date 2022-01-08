import {configureStore} from '@reduxjs/toolkit';
import tripListReducer from './tripListSlicer';

export const store = configureStore({
  reducer: {
    trips: tripListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
