import React from 'react';
import {Pressable, View} from 'react-native';
import {MovieItemProps} from '../../model/ui/movieItem';
import CustomImage from '../ui/customImage';
import {useNavigation} from '@react-navigation/native';
import {MOVIESDETAIL} from '../../utils/routes';

const MovieItem: React.FC<MovieItemProps> = props => {
  const {item, type} = props;
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate(MOVIESDETAIL, {movie: item, type: type})
      }>
      <CustomImage
        style={{
          width: 140,
          height: 200,
          resizeMode: 'contain',
          borderRadius: 10,
        }}
        path={item.poster_path}
      />
    </Pressable>
  );
};

export default MovieItem;
