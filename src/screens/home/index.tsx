import React, {useEffect} from 'react';
import {SafeAreaView, Text, StyleSheet, View, FlatList} from 'react-native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import {useDispatch, useSelector} from 'react-redux';
import {getTopRatedMovies} from '../../store/actions/moviesActions';
import MovieItem from '../../components/movies/movieItem';
import SectionTitle from '../../components/ui/sectionTitle';
import {homeData} from '../../utils/homeSections';
import SectionItem from '../../components/movies/sectionItem';
import {getTopRatedTv} from '../../store/actions/tvActions';

const Home: React.FC = () => {
  return (
    <View style={defaultScreenStyle.container}>
      <FlatList
        data={homeData}
        renderItem={({item}) => <SectionItem sectionItem={item} />}
      />
    </View>
  );
};

export default Home;
