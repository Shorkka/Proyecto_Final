import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RegistrationStep1 from '../app/screens/RegistrationStep1';
import RegistrationStep2 from '../app/screens/RegistrationStep2';

const Stack = createStackNavigator();

export default function RegistrationFlow() {
  return (
  
    <Stack.Navigator initialRouteName='RegistrationStep1' screenOptions={{headerShown: false}}>
    <Stack.Screen 
        name="RegistrationStep1" 
        component={RegistrationStep1} 
        options={{ title: 'Paso 1 de 2: Detalles adicionales' }}
      />
      <Stack.Screen 
        name="RegistrationStep2" 
        component={RegistrationStep2} 
        options={{ title: 'Paso 2 de 2: Detalles adicionales' }}
      />
    </Stack.Navigator>
  );
}