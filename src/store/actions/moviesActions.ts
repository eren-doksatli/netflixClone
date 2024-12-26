import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from '../../service/verb';
import {
  MOVIE_URL,
  POPULAR_MOVIES_URL,
  TOP_RATED_MOVIES_URL,
} from '../../service/urls';

const getTopRatedMovies = createAsyncThunk(
  'movies/getTopRatedMovies',
  async () => {
    const response = await getRequest(TOP_RATED_MOVIES_URL, {});
    return response.data;
  },
);

const getPopularMovies = createAsyncThunk(
  'movies/getPopularMovies',
  async () => {
    const response = await getRequest(POPULAR_MOVIES_URL, {});
    return response.data;
  },
);

const getMovieDetail = createAsyncThunk('movies/getMovieDetail', async id => {
  const response = await getRequest(`${MOVIE_URL}/${id}`, {});
  return response.data;
});

export {getTopRatedMovies, getPopularMovies, getMovieDetail};
