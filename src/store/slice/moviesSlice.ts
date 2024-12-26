import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  getMovieDetail,
  getPopularMovies,
  getTopRatedMovies,
} from '../actions/moviesActions';
import {MoviesTypes} from '../../model/data/moviesTypes';

const initialState: MoviesTypes = {
  pending: false,
  topRatedMovies: [],
  popularMovies: [],
  movieDetailData: {},
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    resetDetailData: (state, action) => {
      state.movieDetailData = {};
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getTopRatedMovies.pending, state => {
        state.pending = true;
      })
      .addCase(
        getTopRatedMovies.fulfilled,
        (state, action: PayloadAction<T>) => {
          state.topRatedMovies = action.payload.results;
        },
      )
      .addCase(
        getTopRatedMovies.rejected,
        (state, action: PayloadAction<T>) => {},
      )

      .addCase(getPopularMovies.pending, state => {
        state.pending = true;
      })
      .addCase(
        getPopularMovies.fulfilled,
        (state, action: PayloadAction<T>) => {
          state.popularMovies = action.payload.results;
        },
      )
      .addCase(
        getPopularMovies.rejected,
        (state, action: PayloadAction<T>) => {},
      )

      .addCase(getMovieDetail.pending, state => {
        state.pending = true;
      })
      .addCase(getMovieDetail.fulfilled, (state, action: PayloadAction<T>) => {
        state.movieDetailData = action.payload;
        state.pending = false;
      })
      .addCase(
        getMovieDetail.rejected,
        (state, action: PayloadAction<T>) => {},
      );
  },
});

export const {resetDetailData} = moviesSlice.actions;

export default moviesSlice.reducer;
