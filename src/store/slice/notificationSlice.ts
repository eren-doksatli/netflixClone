import {createSlice} from '@reduxjs/toolkit';
import {getTopRatedMovies} from '../actions/moviesActions';
import {MoviesTypes} from '../../model/data/moviesTypes';
import {getPopularTv, getTopRatedTv, getTvDetail} from '../actions/tvActions';
import {TvTypes} from '../../model/data/tvTypes';
import {NotificationsTypes} from '../../model/data/notificationsTypes';

const initialState: NotificationsTypes = {
  pending: false,
  notifications: [
    {
      title: 'Bildirim 1',
      time: '23 Aralik',
    },
  ],
  notificationCount: 0,
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {},
});

export default notificationSlice.reducer;
