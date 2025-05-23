import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import supabase from '../database/Supabase';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

const handleLogin = async () => {
  if (email && password) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      Alert.alert('Error al iniciar sesión', error.message);
    } else {
      await AsyncStorage.setItem('user', JSON.stringify(data.user));
      await AsyncStorage.setItem('session', JSON.stringify(data.session));

      navigation.replace('DoctorScreen', { user: email });
    }
  } else {
    email === ''
      ? Alert.alert('Formato de correo electrónico incorrecto.')
      : Alert.alert('Falta el campo contraseña.');
  }
};

  const handleForgot = () => {
    navigation.navigate('PasswordResetScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inicio de Sesión.</Text>
      <View style={styles.card}>
        <Text>Email</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          placeholder="ejemplo@gmail.com"
        />
        <Text>Password</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          placeholder="*********"
          secureTextEntry
        />
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleForgot}>
        <Text style={styles.link}>¿No recuerda la contraseña?</Text>
      </TouchableOpacity>
      <Text style={styles.register}>¿No tienes cuenta?</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
        <Text style={styles.registerButton}>Regístrate</Text>
      </TouchableOpacity>
    </View>
  );
}