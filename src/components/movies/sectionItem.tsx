import React, {useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import {SectionItemProps} from '../../model/ui/sectionItem';
import SectionTitle from '../ui/sectionTitle';
import MovieItem from './movieItem';
import {sections} from '../../utils/constants';
import {
  getPopularMovies,
  getTopRatedMovies,
} from '../../store/actions/moviesActions';
import {getPopularTv, getTopRatedTv} from '../../store/actions/tvActions';
import {useDispatch, useSelector} from 'react-redux';

const SectionItem: React.FC<SectionItemProps> = props => {
  const {sectionItem} = props;
  const {topRatedMovies, popularMovies} = useSelector(state => state.movies);
  const {topRatedTv, popularTv} = useSelector(state => state.tv);

  const dispatch = useDispatch();

  const getReturnData = () => {
    if (sectionItem?.section == sections.TOPRATEDTV) {
      return topRatedTv;
    } else if (sectionItem?.section == sections.TOPRATEDMOVIES) {
      return topRatedMovies;
    } else if (sectionItem?.section == sections.POPULARMOVIES) {
      return popularMovies;
    } else if (sectionItem?.section == sections.POPULARTV) {
      return popularTv;
    }
  };

  useEffect(() => {
    if (sectionItem?.section == sections.TOPRATEDTV) {
      dispatch(getTopRatedTv());
    } else if (sectionItem?.section == sections.TOPRATEDMOVIES) {
      dispatch(getTopRatedMovies());
    } else if (sectionItem?.section == sections.POPULARMOVIES) {
      dispatch(getPopularMovies());
    } else if (sectionItem?.section == sections.POPULARTV) {
      dispatch(getPopularTv());
    }
  }, []);

  return (
    <View>
      <SectionTitle title={sectionItem.title} />
      <FlatList
        horizontal
        data={getReturnData()}
        renderItem={({item}) => (
          <MovieItem item={item} type={sectionItem.type} />
        )}
      />
    </View>
  );
};

export default SectionItem;
