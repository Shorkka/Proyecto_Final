import React, { useState } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
  FlatList, TextInput, Image
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import AvatarButton from '../../components/AvatarButton';

export default function DoctorScreen() {
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  const pacientes = [
    { id: '1', nombre: 'Paciente 1' },
    { id: '2', nombre: 'Paciente 2' },
    { id: '3', nombre: 'Paciente N' },
  ];
  const kits = [
    { id: '1', nombre: 'Kit1' },
    { id: '2', nombre: 'Kit2', seleccionado: true },
    { id: '3', nombre: 'Kit3' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <AvatarButton/>
        <Text style={styles.logoText}>Lexyvoz</Text>
      </View>

      {/* Main Card */}
      <View style={styles.card}>
        {/* Pacientes */}
        <View style={styles.leftPanel}>
          <Text style={styles.sectionTitle}>Pacientes</Text>
          <View style={styles.searchContainer}>
            <TextInput
              placeholder="Buscar"
              value={search}
              onChangeText={setSearch}
              style={styles.searchInput}
            />
            <Icon name="search" size={20} color="#000" />
          </View>

          {pacientes.map((p, index) => (
            <View key={p.id} style={styles.pacienteItem}>
              <Text style={styles.pacienteNombre}>{p.nombre}</Text>
              <Icon name={index % 2 === 0 ? 'check-box' : 'indeterminate-check-box'} size={22} color="#333" />
            </View>
          ))}

          <TouchableOpacity style={styles.addPacienteButton}>
            <Text style={styles.addPacienteButtonText}>Añadir Paciente</Text>
          </TouchableOpacity>
        </View>

        {/* Kits */}
        <View style={styles.rightPanel}>
          <Text style={styles.sectionTitle}>Kits</Text>
          {kits.map((kit) => (
            <View
              key={kit.id}
              style={[
                styles.kitItem,
                kit.seleccionado && styles.kitItemSelected
              ]}
            >
              <Text style={[styles.kitNombre, kit.seleccionado && { color: '#fff' }]}>
                {kit.nombre}
              </Text>
              <Icon
                name="edit"
                size={18}
                color={kit.seleccionado ? '#fff' : '#333'}
              />
            </View>
          ))}
          <View style={styles.kitItem}>
            <Text style={styles.kitNombre}>+</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffacd', // amarillo pastel
    padding: 10,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111',
  },
  card: {
    backgroundColor: '#f7943e', // naranja claro
    borderRadius: 15,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 5,
  },
  leftPanel: {
    flex: 1.5,
    marginRight: 10,
  },
  rightPanel: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 12,
    justifyContent: 'flex-start',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  searchContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 5,
  },
  pacienteItem: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  pacienteNombre: {
    fontSize: 16,
  },
  addPacienteButton: {
    marginTop: 10,
    backgroundColor: '#e37017',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'center',
  },
  addPacienteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  kitItem: {
    backgroundColor: '#ddd',
    borderRadius: 10,
    paddingVertical: 6,
    paddingHorizontal: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  kitItemSelected: {
    backgroundColor: '#f3701c',
  },
  kitNombre: {
    fontSize: 16,
    fontWeight: '600',
  },
});
