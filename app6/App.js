import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Text, View, TextInput, Button, Image } from 'react-native'
import { styles } from './styles';

export default function App () {

  const [numero, setNumero] = useState(0)
  const [resultado, setResultado] = useState()

  let img_url = 'https://marceloguernieri.com.br/wp-content/uploads/2018/01/charada.gif';

  const descobrir = () => {

    const numeroGerado = Math.floor(Math.random() * 10);

    if(numero == numeroGerado)
    {
      setResultado('Parabéns, você acertou!');
    }
    else
    {
      setResultado('Você errou, tente novamente.');
    }
   
  }

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <View>
        <View>
          <Text style={styles.title}>Jogo do Nº Aleatório</Text>
          <Image style={styles.image} source={{ uri: img_url}} />
          <Text style={{color:'red',textAlign:'center',fontSize:20}}>Pense em um nº de 0 a 10</Text>
          <TextInput
            onChangeText={setNumero}
            value={numero}
            style={styles.input}
          />
          <Button
            color='green'
            title=' Descobrir'
            onPress={descobrir}
          />
          <Text style={styles.resultado}>
            {resultado}
          </Text>
        </View>
      </View>
    </View>
  )
}
