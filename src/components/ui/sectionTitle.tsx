import React from 'react';
import {SafeAreaView, Text, StyleSheet, View} from 'react-native';
import Colors from '../../theme';
import {SectionTitlePropsTypes} from '../../model/ui/sectionItem';

const SectionTitle: React.FC<SectionTitlePropsTypes> = props => {
  const {title} = props;
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20, color: Colors.White, fontWeight: '600'}}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
});

export default SectionTitle;
