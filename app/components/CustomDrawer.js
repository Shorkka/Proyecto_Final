import { View, Text, TouchableOpacity } from 'react-native';

export default function CustomDrawer({ navigation }) {
  return (
    <View style={{ padding: 20 }}>
      <TouchableOpacity onPress={() => navigation.navigate('Doctor')}>
        <Text>Panel Doctor</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={() => navigation.navigate('Patients')}
        style={{ marginTop: 20 }}
      >
        <Text>Panel Paciente</Text>
      </TouchableOpacity>
    </View>
  );
}