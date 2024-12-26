import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';

const Downloads: React.FC = () => {
  return (
    <SafeAreaView style={defaultScreenStyle.container}>
      <Text style={{fontSize: 30}}>Downloads</Text>
    </SafeAreaView>
  );
};

export default Downloads;
