import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from '../../service/verb';
import {POPULAR_TV_URL, TOP_RATED_TV_URL, TV_URL} from '../../service/urls';

const getTopRatedTv = createAsyncThunk('Tv/getTopRatedTv', async () => {
  const response = await getRequest(TOP_RATED_TV_URL, {});
  return response.data;
});

const getPopularTv = createAsyncThunk('Tv/getPopularTv', async () => {
  const response = await getRequest(POPULAR_TV_URL, {});
  return response.data;
});

const getTvDetail = createAsyncThunk('movies/getTvDetail', async id => {
  const response = await getRequest(`${TV_URL}/${id}`, {});
  return response.data;
});

export {getTopRatedTv, getPopularTv, getTvDetail};
