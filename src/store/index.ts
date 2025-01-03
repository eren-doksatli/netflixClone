import {configureStore} from '@reduxjs/toolkit';
import moviesSlice from './slice/moviesSlice';
import tvSlice from './slice/tvSlice';
import notificationSlice from './slice/notificationSlice';

export const store = configureStore({
  reducer: {
    movies: moviesSlice,
    tv: tvSlice,
    notifications: notificationSlice,
  },
});
