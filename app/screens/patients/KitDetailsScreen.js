import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const KitDetailsScreen = ({ route }) => {
  const { kitName } = route.params || { kitName: 'Nombre del kit' };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{kitName}</Text>
      
      <Text style={styles.description}>Descripción</Text>
      
      <View style={styles.infoContainer}>
        <Text>Ejercicios seleccionados: 2</Text>
        <Text>Duración: 5min</Text>
      </View>
      
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Guardar</Text>
      </TouchableOpacity>
      
      <View style={styles.divider} />
      
      <Text style={styles.sectionTitle}>Lista personalizada</Text>
      
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <Text style={styles.tableHeader}>Ejercicio 1</Text>
          <Text style={styles.tableData}>Tipo: Lectura</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableHeader}>Ejercicio 2</Text>
          <Text style={styles.tableData}>Tipo: Lectura</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableHeader}>Ejercicio 3</Text>
          <Text style={styles.tableData}>Tipo: Escritura</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableHeader}>Ejercicio 4</Text>
          <Text style={styles.tableData}>Tipo: Visual</Text>
        </View>
      </View>
      
      <Text style={styles.sectionTitle}>Ejercicios Disponibles</Text>
      
      <View style={styles.exerciseList}>
        <Text style={styles.exerciseItem}>- Lectura</Text>
        <Text style={styles.exerciseItem}>- Escritura</Text>
        <Text style={styles.exerciseItem}>- Visual</Text>
      </View>
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
    marginBottom: 10,
    color: '#333',
  },
  description: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#444',
  },
  infoContainer: {
    marginVertical: 15,
  },
  saveButton: {
    backgroundColor: '#4a90e2',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 20,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 15,
    color: '#444',
  },
  table: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginBottom: 20,
  },
  tableRow: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  tableHeader: {
    flex: 1,
    fontWeight: 'bold',
  },
  tableData: {
    flex: 1,
  },
  exerciseList: {
    marginLeft: 10,
  },
  exerciseItem: {
    fontSize: 16,
    marginVertical: 5,
  },
});

export default KitDetailsScreen;