import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const PatientProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Pacientes</Text>
      
      <View style={styles.section}>
        <Text style={styles.label}>Nombre(s)</Text>
        <Text style={styles.value}>Irene Marijose</Text>
        
        <Text style={styles.label}>Apellido Paterno</Text>
        <Text style={styles.value}>Trejo</Text>
        
        <Text style={styles.label}>Apellido Materno</Text>
        <Text style={styles.value}>Reynoso</Text>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.label}>Edad:</Text>
        <Text style={styles.value}>22</Text>
        
        <Text style={styles.label}>Telefono:</Text>
        <Text style={styles.value}></Text>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.label}>Diagnostico:</Text>
        <Text style={styles.value}></Text>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.label}>Kits asignados:</Text>
        <Text style={styles.value}>Kit 2</Text>
        <Text style={styles.value}>Kit 3</Text>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.label}>Historial de Kits:</Text>
        <Text style={styles.value}>Kit 1</Text>
        <Text style={styles.value}>Kit 4</Text>
        <Text style={styles.value}>Kit 5</Text>
      </View>
      
      <TouchableOpacity style={styles.downloadButton}>
        <Text style={styles.downloadButtonText}>Descargar Datos</Text>
      </TouchableOpacity>
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
  section: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#444',
  },
  value: {
    fontSize: 16,
    marginBottom: 15,
    color: '#666',
    marginLeft: 10,
  },
  downloadButton: {
    backgroundColor: '#4a90e2',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  downloadButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default PatientProfileScreen;