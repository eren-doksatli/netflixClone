import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';

const FastLaughs: React.FC = () => {
  return (
    <SafeAreaView style={defaultScreenStyle.container}>
      <Text style={{fontSize: 30}}>FastLaughs</Text>
    </SafeAreaView>
  );
};

export default FastLaughs;
