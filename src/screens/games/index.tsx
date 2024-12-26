import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';

const Games: React.FC = () => {
  return (
    <SafeAreaView style={defaultScreenStyle.container}>
      <Text style={{fontSize: 30}}>Games</Text>
    </SafeAreaView>
  );
};

export default Games;
