import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigators from './TabNavigators';
import TripDetails from '../screens/tripDetails';

const {Navigator, Screen} = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="HomeTab"
          component={TabNavigators}
          options={{headerShown: false}}
        />
        <Screen
          name="TripDetails"
          component={TripDetails}
          options={{headerBackTitle: '', title: ''}}
        />
      </Navigator>
    </NavigationContainer>
  );
}
