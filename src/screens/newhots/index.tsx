import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';

const NewHot: React.FC = () => {
  return (
    <SafeAreaView style={defaultScreenStyle.container}>
      <Text style={{fontSize: 30}}>NewHot</Text>
    </SafeAreaView>
  );
};

export default NewHot;
