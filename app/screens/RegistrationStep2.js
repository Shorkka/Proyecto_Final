import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform, ProgressBarAndroid, ProgressViewIOS } from 'react-native';


export default function RegistrationStep2({ navigation, route }) {
  const [edad, setEdad] = useState('');
  const [genero, setGenero] = useState('Masculino');
  const [telefono, setTelefono] = useState('');
  const [doctor, setDoctor] = useState(false);
  const [paciente, setPaciente] = useState(false);

  const { nombre, apellidoP, apellidoM } = route.params;

const handleRegister = () => {
  const userData = {
    nombre, apellidoP, apellidoM,
    edad, genero, telefono,
    rol: doctor ? 'Doctor' : 'Paciente'
  };
    navigation.replace('DrawerNavigation', { 
    screen: rol ? 'Doctor' : 'Patients',
    params: { userData }
  });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro de usuario</Text>
      <Text style={styles.subtitle}>Paso 2 de 2: Detalles adicionales</Text>
      <TextInput style={styles.input} placeholder="Edad" keyboardType="numeric" value={edad} onChangeText={setEdad} />
      <Text style={styles.label}>Género</Text>
      <View style={styles.radioGroup}>
        <TouchableOpacity onPress={() => setGenero('Masculino')} style={styles.radioButton}>
          <Text style={{ color: genero === 'Masculino' ? '#f57c00' : '#000' }}>◉ Masculino</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setGenero('Femenino')} style={styles.radioButton}>
          <Text style={{ color: genero === 'Femenino' ? '#f57c00' : '#000' }}>◉ Femenino</Text>
        </TouchableOpacity>
      </View>
      <TextInput style={styles.input} placeholder="Teléfono" keyboardType="phone-pad" value={telefono} onChangeText={setTelefono} />
      <Text style={styles.label}>¿Eres doctor?</Text>
      <View style={styles.radioGroup}>
        <TouchableOpacity onPress={() => { setDoctor(!doctor); if (paciente) setPaciente(false); }}>
          <Text style={{ color: doctor ? '#f57c00' : '#000' }}>☑ Doctor</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { setPaciente(!paciente); if (doctor) setDoctor(false); }}>
          <Text style={{ color: paciente ? '#f57c00' : '#000' }}>☑ Paciente</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={{ color: '#e65100' }}>← Anterior</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.finishButton} onPress={handleRegister}>
          <Text style={{ color: 'white' }}>Completar registro ⟳</Text>
        </TouchableOpacity>
      </View>
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
  label: {
    marginTop: 10, marginBottom: 5
  },
  radioGroup: {
    flexDirection: 'row', gap: 20, marginBottom: 10
  },
  radioButton: {
    marginRight: 15
  },
  backButton: {
    padding: 10
  },
  finishButton: {
    backgroundColor: '#43a047', padding: 12, borderRadius: 5
  }
});
