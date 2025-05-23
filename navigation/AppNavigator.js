import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegistrationFlow from '../navigation/RegistrationFlow';
import SplashScreen from '../app/screens/SplashScreen';
import LoginScreen from '../app/screens/Login';
import DrawerNavigation from '../navigation/DrawerNavigation';

const Stack = createStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Registration" component={RegistrationFlow}/>
        <Stack.Screen name="DrawerNavigation" component={DrawerNavigation}/>
      </Stack.Navigator>
  </NavigationContainer>
  );
}
