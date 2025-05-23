import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const AppointmentScreen = ({ navigation }) => {
  const doctors = [
    { name: 'Dr. Juan P.' },
    { name: 'Dra. Raquel R.' },
    { name: 'Dr. Ernesto J.' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>AGENDA TU CITA</Text>
      
      <Text style={styles.sectionTitle}>Buscar</Text>
      
      {doctors.map((doctor, index) => (
        <View key={index} style={styles.doctorItem}>
          <Text style={styles.doctorName}>{doctor.name}</Text>
        </View>
      ))}
      
      <Text style={styles.sectionTitle}>Filtros</Text>
      
      {doctors.map((doctor, index) => (
        <TouchableOpacity 
          key={index} 
          style={styles.appointmentButton}
          onPress={() => navigation.navigate('ScheduleForm', { doctor: doctor.name })}
        >
          <Text style={styles.appointmentButtonText}>Agendar Cita</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 15,
    color: '#444',
  },
  doctorItem: {
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
  },
  doctorName: {
    fontSize: 16,
  },
  appointmentButton: {
    backgroundColor: '#4a90e2',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
  },
  appointmentButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default AppointmentScreen;