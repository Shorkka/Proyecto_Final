import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { CheckBox } from 'react-native-elements';

const KitsScreen = ({ navigation }) => {
  const [hasKits, setHasKits] = useState(false);
  const [checkedItems, setCheckedItems] = useState({
    'Kit 2': false,
    'Kit 3': false,
    'JUGAR': false,
    'Kit 1': false,
    'Kit 4': false,
    'Kit 5': false,
  });

  const toggleCheckbox = (item) => {
    setCheckedItems({
      ...checkedItems,
      [item]: !checkedItems[item],
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Bienvenido</Text>
      
      <Text style={styles.sectionTitle}>Kits Asignados</Text>
      
      {hasKits ? (
        <View>
          <Text style={styles.emptyText}>No hay kits pendientes.</Text>
          
          <Text style={styles.sectionTitle}>Historial</Text>
          <View style={styles.historicalItem}>
            <Text>- Kit 1</Text>
          </View>
          <View style={styles.historicalItem}>
            <Text>- Kit 2</Text>
          </View>
          <View style={styles.historicalItem}>
            <Text>- Kit 3</Text>
          </View>
          
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => navigation.navigate('Welcome')}
          >
            <Text style={styles.backButtonText}>Volver a Jugar</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          {Object.keys(checkedItems).map((item, index) => (
            <View key={index} style={styles.checkboxContainer}>
              <CheckBox
                checked={checkedItems[item]}
                onPress={() => toggleCheckbox(item)}
              />
              <Text style={styles.checkboxLabel}>{item}</Text>
            </View>
          ))}
        </View>
      )}
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
  emptyText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  historicalItem: {
    marginLeft: 20,
    marginVertical: 5,
  },
  backButton: {
    backgroundColor: '#4a90e2',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 30,
  },
  backButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  checkboxLabel: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default KitsScreen;