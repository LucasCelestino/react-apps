import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Text, View, TextInput, Button, Image } from 'react-native'
import { styles } from './styles';

export default function App () {

  const [alcool, setAlcool] = useState()
  const [gasolina, setGasolina] = useState()
  const [resultado, setResultado] = useState()

  let img_url = 'https://opetroleo.com.br/wp-content/uploads/2018/09/Calculadora-Flex.jpg';

  const calcular = () => {

    let divisao = alcool / gasolina;

    if(divisao > 0.7){
      setResultado('A gasolina é melhor para abastecer!')
    }
    else
    {
      setResultado('O alcool é melhor para abastecer!')
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <View>
        <View>
          <Text style={styles.title}>Alcool ou Gasolina</Text>
          <Image style={styles.image} source={{ uri: img_url}} />
          <TextInput
            onChangeText={setAlcool}
            value={alcool}
            style={styles.input}
            placeholder='Preço do alcool'
          />
          <TextInput
            onChangeText={setGasolina}
            value={gasolina}
            style={styles.input}
            placeholder='Preço da gasolina'
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
