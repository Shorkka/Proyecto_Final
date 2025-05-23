import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../app/screens/patients/WelcomeScreen';
import KitsScreen from '../app/screens/patients/KitsScreen';
import KitDetailsScreen from '../app/screens/patients/KitDetailsScreen';
import PatientProfileScreen from '../app/screens/patients/PatientProfileScreen';
import AppointmentScreen from '../app/screens/patients/AppointmentScreen';

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