import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
 
const Drawer = createDrawerNavigator();
 
import Pessoal from './src/pages/Pessoal';
import Formacao from './src/pages/Formacao';
import Experiencia from './src/pages/Experiencia';
 
export default function App(){

  let img_url = 'https://media-exp1.licdn.com/dms/image/C5603AQG56ZqzIvPP8A/profile-displayphoto-shrink_800_800/0/1612990645667?e=1669852800&v=beta&t=35r5tSf8CsMIEFxgQb-xVc5Ll-vnIgXFRmcNOGRJHD4';

  return(
  <NavigationContainer>
    <Drawer.Navigator>
    <View>
      <Image source={{ uri: img_url}} />
      <Text>Lucas Celestino</Text>
    </View>
      <Drawer.Screen 
      name="Pessoal" 
      component={Pessoal} 
      />
      <Drawer.Screen 
      name="Formacao" 
      component={Formacao} 
      />
      <Drawer.Screen 
      name="Experiencia"      
      component={Experiencia} 
      />
    </Drawer.Navigator>
  </NavigationContainer>
  );
}
