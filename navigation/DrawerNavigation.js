import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DoctorNavigator from './DoctorNavigator';
import PatienNavigation from './PatientNavigator'
import CustomDrawer from '../components/CustomDrawer';
const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
<Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={{
          headerShown: false,
          drawerType: 'front', 
          drawerStyle: {
            width: 250, 
          },
        }}
      >
        <Drawer.Screen 
          name="Doctor" 
          component={DoctorNavigator}
          options={{
            title: 'Pantalla Doctor',
          }}
        />
        <Drawer.Screen 
          name = "Patients"
          component={PatienNavigation}
          options={{
            title: 'Pantalla del paciente'
          }}
        />
      </Drawer.Navigator>
  );
}