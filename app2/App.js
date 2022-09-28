import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { Component } from 'react';
import { styles } from './styles';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      nome: '',
      contador: 0,
    };
    
    this.adicionarPessoa = this.adicionarPessoa.bind(this);
 
    this.removerPessoa = this.removerPessoa.bind(this);
  }
 
  adicionarPessoa(){
    this.setState({
      contador: this.state.contador + 1
    });
  }

  removerPessoa(){
    this.setState({
      contador: this.state.contador - 1
    });
  }
 
  render(){
    return(
      <View style={styles.container}>
      <Text style={styles.title}>Contador de Pessoas</Text>
      <Text style={styles.text_content}>{this.state.contador > 0 ? this.state.contador : 0}</Text>
      <Button title="             +               " onPress={this.adicionarPessoa} color="green"/>
      <Button title="             -                " onPress={this.removerPessoa} color="red" />
      </View>
    );
  }
}
 
export default App;
