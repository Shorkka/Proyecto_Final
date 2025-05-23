import React, { Component } from 'react'
import { StyleSheet, Image, View, Dimensions, TouchableOpacity } from 'react-native'
import {AsyncStorage} from 'react-native';

export default class AvatarButton extends Component ({navigate}){
    state = {
        avatar: DEFAULT_AVATAR,
      };

      async componentDidMount() {
        try {
          const uri = await AsyncStorage.getItem('avatar_uri');
          if (uri) {
            this.setState({ avatar: { uri } });
          }
        } catch (e) {
          console.log('Error cargando avatar:', e);
        }
      }
      
  render() {
    const handleDrawer = () => {
        navigation.openDrawer();
    }
    return (
            <View style={styles.container}>
                <TouchableOpacity onPress ={{handleDrawer}}>
                    <Image 
                        source={this.state.avatar} 
                        style={styles.avatar}
                    />
                </TouchableOpacity>
            </View>
    )
  }
}

const DEFAULT_AVATAR = require('../assets/user.png');
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 30,
        left: 20,
        zIndex: 100, 
    },
    avatar: {
        width: 50, 
        height: 50,
        borderRadius: 25, 
        borderWidth: 2,
        borderColor: 'white', 
    }
});