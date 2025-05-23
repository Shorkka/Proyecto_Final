import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/patients/WelcomeScreen';
import KitsScreen from '../screens/patients/KitsScreen';
import KitDetailsScreen from '../screens/patients/KitDetailsScreen';
import PatientProfileScreen from '../screens/patients/PatientProfileScreen';
import AppointmentScreen from '../screens/patients/AppointmentScreen';

const Stack = createStackNavigator();

const PatienNavigation = () => {
  return (
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen} 
          options={{ title: 'Bienvenido' }}
        />
        <Stack.Screen 
          name="Kits" 
          component={KitsScreen} 
          options={{ title: 'Kits' }}
        />
        <Stack.Screen 
          name="KitDetails" 
          component={KitDetailsScreen} 
          options={{ title: 'Detalles del Kit' }}
        />
        <Stack.Screen 
          name="PatientProfile" 
          component={PatientProfileScreen} 
          options={{ title: 'Perfil del Paciente' }}
        />
        <Stack.Screen 
          name="Doctors" 
          component={AppointmentScreen} 
          options={{ title: 'Agendar Cita' }}
        />
      </Stack.Navigator>
  );
};

export default PatienNavigation;