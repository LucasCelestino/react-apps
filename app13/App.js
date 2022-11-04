import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
 
import Experiencia from './src/pages/Experiencia';
import Formacao from './src/pages/Formacao';
import Pessoal from './src/pages/Pessoal';
 
const Tab = createBottomTabNavigator();
 
export default function App(){
  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Pessoal' component={Pessoal} />
        <Tab.Screen name='Formação' component={Formacao} />
        <Tab.Screen name='Experiência' component={Experiencia} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
