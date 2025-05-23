import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Lexyvoz</Text>
      <Image
        source={require('../assets/lexyVoz.png')}
        style={{ width: 150, height: 150, marginTop: 20 }}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fffec9', 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  logo: {
    fontSize: 28,
    fontWeight: 'bold'
  }
});
