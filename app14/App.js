import React, { useState } from "react";
import { Text, View, StyleSheet, Switch } from 'react-native';
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

// You can import from local files

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {

  const [fundo, setFundo]=useState(null);
  const [fonte, setFonte]=useState(null);

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [isEnabled2, setIsEnabled2] = useState(false);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);

  const ArmazenarFundo = (key,value)=>{
    AsyncStorage.setItem(key,value);
  }

  const BuscarFundo = async (key) => {
    const value = await AsyncStorage.getItem(key);
    setFundo(value);
  }

  ArmazenarFundo('1', "'#CCC'");
  ArmazenarFundo('2', "'#FFF'");

  if(isEnabled == true)
  {
    BuscarFundo('1');
  }
  else
  {
    BuscarFundo('2');
  }

  const ArmazenarFonte = (key,value)=>{
    AsyncStorage.setItem(key,value);
  }

  const BuscarFonte = async (key) => {
    const value = await AsyncStorage.getItem(key);
    setFonte(value);
  }

  ArmazenarFonte('1', 'fontSize: 10');
  ArmazenarFonte('2', 'fontSize: 17');

  if(isEnabled2 == true)
  {
    BuscarFonte('1');
  }
  else
  {
    BuscarFonte('2');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Frases
      </Text>
      <View style={styles.switch_container}>
        <View style={styles.inputs}>
        <Text style={styles.title_switch}>Dia</Text>
        <Switch style={styles.switch_titlea}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View style={styles.inputs}>
        <Text style={styles.title_switch}>Pequeno</Text>
        <Switch style={styles.switch_titlea}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled2 ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch2}
          value={isEnabled2}
        />
      </View>
      </View>
      <View style = {{backgroundColor: {fundo},borderWidth:1,paddingVertical:15,
      paddingHorizontal:10, }}>
        <Text style = {{fonte}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at rutrum felis. Donec a vehicula justo, sed aliquam purus. Nulla ultrices pretium varius. Sed molestie tellus in aliquet tristique.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 15,
  },
  paragraph: {
    margin: 5,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    borderBottomWidth:1
  },
  inputs:{
    flex:1,
    flexDirection:"row"
  },
  title_switch:{
    marginRight:10
  },
  switch_container:{
    flex:1,
    flexDirection:"row",
    justifyContent:"space-between",
    paddingVertical:10
  },
});
