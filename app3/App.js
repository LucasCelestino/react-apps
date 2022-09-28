import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Text, View, TextInput, Button } from 'react-native'
import { styles } from './styles';

export default function App () {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [resultado, setResultado] = useState(0)

  const calcular = () => {
    if(num1 >= 0 & num2 >= 0){
      setResultado(num1 * num2)
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <View>
        <View>
          <Text style={styles.title}>Multiplicação de números</Text>
          <TextInput
            onChangeText={setNum1}
            value={num1}
            style={styles.input}
            placeholder='Digite o primeiro número'
          />
          <TextInput
            onChangeText={setNum2}
            value={num2}
            style={styles.input}
            placeholder='Digite o segundo número'
          />
          <Button
            color='green'
            title=' Calcular'
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
