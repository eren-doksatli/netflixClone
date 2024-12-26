import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import {
  DOWNLOADS,
  FASTLAUGHS,
  GAMES,
  HOME,
  NEWHOT,
  NOTIFICATIONS,
} from '../utils/routes';
import Games from '../screens/games';
import NewHot from '../screens/newhots';
import FastLaughs from '../screens/fastlaughs';
import Downloads from '../screens/downloads';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../theme';
import {Image, Pressable, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

const TabNavigator: React.FC = () => {
  const Tab = createBottomTabNavigator();

  const {notificationCount} = useSelector(state => state.notifications);

  return (
    <Tab.Navigator
      screenOptions={({navigation, route}) => ({
        headerLeft: () => (
          <Image
            source={require('../assets/icons/netflixIcon.png')}
            style={{width: 38, height: 38, resizeMode: 'center'}}
          />
        ),
        headerRight: () => (
          <View style={{flexDirection: 'row', paddingHorizontal: 10}}>
            <Pressable onPress={() => navigation.navigate(NOTIFICATIONS)}>
              <Ionicons
                style={{paddingHorizontal: 5}}
                name={'notifications-outline'}
                size={28}
                color={Colors.White}
              />
              {notificationCount != 0 && (
                <View
                  style={{
                    backgroundColor: Colors.Red,
                    position: 'absolute',
                    width: 15,
                    height: 15,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 100,
                    left: 2,
                    top: -2,
                  }}>
                  <Text style={{color: Colors.White, fontWeight: '500'}}>
                    {notificationCount}
                  </Text>
                </View>
              )}
            </Pressable>
            <Pressable>
              <Ionicons
                name={'search-outline'}
                size={28}
                color={Colors.White}
              />
            </Pressable>
            <Pressable style={{paddingHorizontal: 5}}>
              <Ionicons
                name={'person-circle-outline'}
                size={28}
                color={Colors.White}
              />
            </Pressable>
          </View>
        ),
        headerTintColor: Colors.White,
        tabBarStyle: {
          backgroundColor: Colors.Black,
        },
        headerStyle: {
          backgroundColor: Colors.Black,
          borderBottomWidth: 0.2,
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === HOME) {
            iconName = 'home-outline';
          } else if (route.name === GAMES) {
            iconName = 'game-controller-outline';
          } else if (route.name === NEWHOT) {
            iconName = 'play-circle-outline';
          } else if (route.name === FASTLAUGHS) {
            iconName = 'happy-outline';
          } else if (route.name === DOWNLOADS) {
            iconName = 'download-outline';
          }

          // İkonun aktif ya da inaktif olduğunu kontrol et
          const iconColor = focused ? Colors.Red : Colors.Gray;

          return (
            <Ionicons name={iconName as string} size={size} color={color} />
          );
        },
        tabBarActiveTintColor: Colors.Red,
        tabBarInactiveTintColor: Colors.Gray,
      })}>
      <Tab.Screen name={HOME} component={Home} />
      <Tab.Screen name={GAMES} component={Games} />
      <Tab.Screen name={NEWHOT} component={NewHot} />
      <Tab.Screen name={FASTLAUGHS} component={FastLaughs} />
      <Tab.Screen name={DOWNLOADS} component={Downloads} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
