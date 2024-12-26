import React, {useEffect} from 'react';
import {Text, View, ScrollView, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getMovieDetail} from '../../store/actions/moviesActions';
import CustomImage from '../../components/ui/customImage';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import Colors from '../../theme';
import {resetDetailData} from '../../store/slice/moviesSlice';

const MoviesDetail: React.FC<Props> = ({route}) => {
  const {movieDetailData, pending} = useSelector(state => state.movies);

  const {movie, type} = route.params;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieDetail(movie.id));
    return () => {
      dispatch(resetDetailData());
    };
  }, []);

  return (
    <View style={defaultScreenStyle.container}>
      {pending ? (
        <ActivityIndicator size={'large'} color={Colors.White} />
      ) : (
        <ScrollView>
          <CustomImage
            path={movieDetailData.backdrop_path}
            style={{
              width: '100%',
              height: 250,
              resizeMode: 'contain',
              top: -15,
            }}
          />
          <Text
            style={{
              fontSize: 30,
              color: Colors.White,
              fontWeight: '900',
              marginVertical: 10,
            }}>
            {movieDetailData.original_title}
          </Text>
          <Text style={{fontSize: 18, color: Colors.White}}>
            {movieDetailData.overview}
          </Text>

          {movieDetailData?.production_companies?.[0]?.name && (
            <Text
              style={{
                fontSize: 16,
                color: Colors.White,
                marginVertical: 30,
                fontWeight: '500',
              }}>
              Company : {movieDetailData.production_companies[0].name}
            </Text>
          )}

          {movieDetailData?.release_date && (
            <Text
              style={{
                fontSize: 16,
                color: Colors.White,
                marginVertical: 10,
                top: -20,
              }}>
              Release Year : {movieDetailData.release_date.split('-')[0]}
            </Text>
          )}

          {movieDetailData?.vote_average && (
            <Text style={{fontSize: 16, color: Colors.White, top: -10}}>
              Rating : {movieDetailData.vote_average.toFixed(1)}
            </Text>
          )}
        </ScrollView>
      )}
    </View>
  );
};

export default MoviesDetail;
