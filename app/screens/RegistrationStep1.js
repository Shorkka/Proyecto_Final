import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Platform } from 'react-native';


export default function RegistrationStep1({ navigation }) {
  const [nombre, setNombre] = useState('');
  const [apellidoP, setApellidoP] = useState('');
  const [apellidoM, setApellidoM] = useState('');

  const handleNext = () => {
    navigation.navigate('RegistrationStep2', {
      nombre, apellidoP, apellidoM
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro de usuario</Text>
      <Text style={styles.subtitle}>Paso 1 de 2: Información personal</Text>
        
      <TextInput style={styles.input} placeholder="Nombre(s)" value={nombre} onChangeText={setNombre} />
      <TextInput style={styles.input} placeholder="Apellido Paterno" value={apellidoP} onChangeText={setApellidoP} />
      <TextInput style={styles.input} placeholder="Apellido Materno" value={apellidoM} onChangeText={setApellidoM} />
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Siguiente →</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#fffec9', padding: 20, justifyContent: 'center'
  },
  title: {
    fontSize: 22, fontWeight: 'bold', color: '#e65100', marginBottom: 10
  },
  subtitle: {
    marginBottom: 10, color: '#a85400'
  },
  input: {
    backgroundColor: '#fff', borderWidth: 1, borderColor: '#f4b183', marginVertical: 8, padding: 10, borderRadius: 5
  },
  button: {
    backgroundColor: '#f57c00', padding: 12, borderRadius: 5, alignItems: 'center', marginTop: 20
  },
  buttonText: {
    color: 'white', fontWeight: 'bold'
  }
});
