import React from 'react';
import {StatusBar} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {screens} from '../utilities/Constants';
import * as Manager from './Manager';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle={'light-content'} />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={screens.SplashScreen}>
        <Stack.Screen
          name={screens.SplashScreen}
          component={Manager.routeComponent(screens.SplashScreen)}
          options={Manager.routeOptions(screens.SplashScreen)}
        />
        <Stack.Screen
          name={screens.MainScreen}
          component={Manager.routeComponent(screens.MainScreen)}
          options={Manager.routeOptions(screens.MainScreen)}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
