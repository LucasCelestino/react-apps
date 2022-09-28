import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import React, { Component } from 'react';

export default function App() {

  let img_url = 'https://media-exp1.licdn.com/dms/image/C5603AQG56ZqzIvPP8A/profile-displayphoto-shrink_800_800/0/1612990645667?e=1669852800&v=beta&t=35r5tSf8CsMIEFxgQb-xVc5Ll-vnIgXFRmcNOGRJHD4';

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: img_url}} />
      <Text style={styles.title}>Dados Pessoais:</Text>
      <Text style={styles.text_content}>Nome: Lucas Celestino</Text>
      <Text style={styles.text_content}>Idade: 23</Text>
      <Text style={styles.title}>Formação:</Text>
      <Text style={styles.text_content}>Curso: Tecnólogo em Sistemas para Internet</Text>
      <Text style={styles.text_content}>Curso: Técnico em Informática para Internet (trancado) </Text>
      <Text style={styles.title}>Experiência:</Text>
      <Text style={styles.text_content}>Github: https://github.com/LucasCelestino</Text>
      <Text style={styles.title}>Projetos:</Text>
      <Text style={styles.text_content}>PHP Mini Framework: https://github.com/LucasCelestino/frameworkphp</Text>
      <Text style={styles.text_content}>Tasks Online: https://github.com/LucasCelestino/task-online</Text>
      <Text style={styles.text_content}>Digibank: https://github.com/LucasCelestino/sistema-digibank</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical:50,
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },

  image:{
    width:200,
    height:200
  },

  title:{
    fontWeight:'bold',
    fontSize:20,
    marginVertical:5
  },

  text_content:{
    maxWidth:250,
    textAlign:'center'
  }
});
