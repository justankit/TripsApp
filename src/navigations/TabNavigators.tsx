import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import Trips from '../screens/trips';

const {Navigator, Screen} = createBottomTabNavigator();

export default function TabNavigators() {
  return (
    <Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarStyle: {
          paddingBottom: 0,
          justifyContent: 'center',
        },
        tabBarLabelStyle: {fontSize: 15},
        tabBarItemStyle: {justifyContent: 'center', fontSize: 40},
        tabBarActiveBackgroundColor: 'lightblue',
        // tabBarStyle: {paddingBottom: 0, justifyContent: "center"},
        tabBarIconStyle: {display: 'none'},
      })}>
      <Screen name="Home" component={Home} />
      <Screen name="Trips" component={Trips} />
    </Navigator>
  );
}
