import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Switch,Button } from 'react-native';
import { styles } from './styles';

import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

export default function App() {

  const [nome, setNome] = useState()
  const [idade, setIdade] = useState()
  const [sexo, setSexo] = useState()
  const [escolaridade, setEscolaridade] = useState()
  const [limite, setLimite] = useState()
  const [brasileiro, setBrasileiro] = useState(false)
  const [dados, setDados] = useState()
  const [trigger, setTrigger] = useState(false)

  const showDados = () => {

      setTrigger(true);
  }
  

  return (
    <View style={styles.container}>
      <Text>Abertura de Conta</Text>
      <View style={styles.view_input}>
        <Text style={styles.title_input}>Nome:</Text>
        <TextInput
        onChangeText={setNome}
        value={nome}
        style={styles.input}
        />
      </View>
      <View style={styles.view_input}>
        <Text style={styles.title_input}>Idade:</Text>
        <TextInput
        onChangeText={setIdade}
        value={idade}
        style={styles.input}
        />
      </View>
      <View style={styles.view_input}>
        <Text style={styles.title_input}>Sexo:</Text>
        <Picker selectedValue={0} onValueChange={setSexo} style={styles.picker}>
        <Picker.Item key={0} value={0} label="-------" />
        <Picker.Item key={1} value={1} label="Masculino" />
        <Picker.Item key={2} value={2} label="Feminino" />
      </Picker>
      </View>
      <View style={styles.view_input}>
        <Text style={styles.title_input}>Escolaridade:</Text>
        <Picker selectedValue={0} onValueChange={setEscolaridade} style={styles.picker}>
        <Picker.Item key={0} value={0} label="-------" />
        <Picker.Item key={1} value={1} label="Ensino Fundamental" />
        <Picker.Item key={2} value={2} label="Ensino Médio" />
        <Picker.Item key={2} value={3} label="Ensino Superior" />
      </Picker>
      </View>
      <View style={styles.view_input}>
        <Text style={styles.title_input}>Limite:</Text>
        <Slider
        style={styles.slider}
        onValueChange={setLimite}
        minimumValue={0}
        maximumValue={5000}
        step={1}
        />
        <Text style={styles.title_input}>{limite}</Text>
      </View>
      <View style={styles.view_input}>
        <Text style={styles.title_input}>Brasileiro:</Text>
        <Switch 
      onValueChange={setBrasileiro}
      value={brasileiro}
      />
      </View>
      <Button
      color='blue'
      title=' Confirmar'
      onPress={showDados}
      />
      <View>
        <Text>Dados Informados: </Text>
        <View>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}