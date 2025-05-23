import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button } from 'react-native-paper';

export default function ProfileScreen({ navigation, route }) {
  // Datos del usuario (pueden venir de route.params o de un contexto global)
  const userData = route.params || {
    nombre: 'Alejandro',
    apellidoP: 'Gómez',
    apellidoM: 'Pérez',
    email: 'alejandro@ejemplo.com',
    telefono: '555-123-4567',
    rol: 'Doctor',
    profileImage: 'https://i.imgur.com/0LKZQYM.png',
    especialidad: 'Neurología', // Solo para doctores
    diagnostico: 'N/A' // Solo para pacientes
  };

  const isDoctor = userData.rol === 'Doctor';

  return (
    <ScrollView style={styles.container}>
      {/* Header con foto de perfil */}
      <View style={styles.profileHeader}>
        <Image 
          source={{ uri: userData.profileImage }} 
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>
          {isDoctor ? 'Dr.' : ''} {userData.nombre} {userData.apellidoP}
        </Text>
        <Text style={styles.profileEmail}>{userData.email}</Text>
        
        <TouchableOpacity 
          style={styles.editButton}
          onPress={() => navigation.navigate('EditProfile', { userData })}
        >
          <Icon name="pencil" size={20} color="#6200ee" />
          <Text style={styles.editButtonText}>Editar Perfil</Text>
        </TouchableOpacity>
      </View>

      {/* Información básica */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Información Personal</Text>
        
        <View style={styles.infoItem}>
          <Icon name="phone" size={22} color="#666" />
          <Text style={styles.infoText}>{userData.telefono}</Text>
        </View>
        
        {isDoctor ? (
          <View style={styles.infoItem}>
            <Icon name="stethoscope" size={22} color="#666" />
            <Text style={styles.infoText}>{userData.especialidad}</Text>
          </View>
        ) : (
          <View style={styles.infoItem}>
            <Icon name="clipboard-pulse" size={22} color="#666" />
            <Text style={styles.infoText}>Diagnóstico: {userData.diagnostico}</Text>
          </View>
        )}
      </View>

      {/* Configuración de cuenta */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Configuración de Cuenta</Text>
        
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="bell" size={22} color="#666" />
          <Text style={styles.menuText}>Notificaciones</Text>
          <Icon name="chevron-right" size={22} color="#999" />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="shield-account" size={22} color="#666" />
          <Text style={styles.menuText}>Privacidad y Seguridad</Text>
          <Icon name="chevron-right" size={22} color="#999" />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="message-text" size={22} color="#666" />
          <Text style={styles.menuText}>Preferencias de Mensajes</Text>
          <Icon name="chevron-right" size={22} color="#999" />
        </TouchableOpacity>
      </View>

      {/* Acciones importantes */}
      <View style={styles.actionsSection}>
        <Button 
          mode="outlined" 
          icon="lock-reset"
          style={styles.actionButton}
          labelStyle={styles.actionButtonText}
        >
          Cambiar Contraseña
        </Button>
        
        <Button 
          mode="contained" 
          icon="logout" 
          onPress={() => navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }]
          })}
          style={[styles.actionButton, styles.logoutButton]}
          labelStyle={[styles.actionButtonText, styles.logoutButtonText]}
        >
          Cerrar Sesión
        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileHeader: {
    alignItems: 'center',
    padding: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
    borderWidth: 3,
    borderColor: '#6200ee',
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  profileEmail: {
    fontSize: 16,
    color: '#666',
    marginBottom: 15,
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#6200ee',
  },
  editButtonText: {
    marginLeft: 5,
    color: '#6200ee',
    fontWeight: '500',
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#6200ee',
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  infoText: {
    marginLeft: 15,
    fontSize: 16,
    color: '#333',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
  },
  menuText: {
    flex: 1,
    marginLeft: 15,
    fontSize: 16,
    color: '#333',
  },
  actionsSection: {
    padding: 20,
  },
  actionButton: {
    marginBottom: 15,
    paddingVertical: 8,
    borderColor: '#6200ee',
  },
  actionButtonText: {
    fontSize: 16,
  },
  logoutButton: {
    backgroundColor: '#ff4444',
    borderColor: '#ff4444',
  },
  logoutButtonText: {
    color: '#fff',
  },
});