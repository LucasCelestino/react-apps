import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Text, View, TextInput, Button, Image } from 'react-native'
import { styles } from './styles';

export default function App () {

  const [peso, setPeso] = useState()
  const [altura, setAltura] = useState()
  const [resultado, setResultado] = useState()

  let img_url = 'https://play-lh.googleusercontent.com/ouL1lfSP_CyUgb5OUvI51jG3cevMfulA1GZGtS63r3Xfa8STYiIxq6KiY3PkMc6PcTk';

  const calcular = () => {

    let calculoImc = peso / (altura * altura);

    setResultado('Valor do IMC: '+calculoImc.toFixed(2));
  }

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <View>
        <View>
          <Text style={styles.title}>Cálculo do IMC</Text>
          <Image style={styles.image} source={{ uri: img_url}} />
          <TextInput
            onChangeText={setPeso}
            value={peso}
            style={styles.input}
            placeholder='Peso'
          />
          <TextInput
            onChangeText={setAltura}
            value={altura}
            style={styles.input}
            placeholder='Altura'
          />
          <Button
            color='green'
            title=' Verificar'
            onPress={calcular}
          />

          <Text style={styles.resultado}>
            {resultado}
          </Text>
        </View>
      </View>
    </View>
  )
}
