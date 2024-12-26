import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MOVIESDETAIL, NOTIFICATIONS, TAB} from '../utils/routes';
import TabNavigator from './tabNavigator';
import Colors from '../theme';
import MoviesDetail from '../screens/movies/moviesDetail';
import Notification from '../screens/notification/notification';

const RootNavigator: React.FC = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.Black,
        },
        headerTintColor: Colors.White,
        headerBackTitle: 'Back',
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        name={TAB}
        component={TabNavigator}
      />
      <Stack.Screen name={MOVIESDETAIL} component={MoviesDetail} />
      <Stack.Screen name={NOTIFICATIONS} component={Notification} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
