import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
 
class Ceps extends Component{
  render(){
    return(
      <View>
          <Text>CEP: {this.props.data.cep}</Text>
          <Text>Logradouro: {this.props.data.logradouro}</Text>
          <Text>Bairro: {this.props.data.bairro}</Text>
          <Text>Cidade: {this.props.data.localidade}</Text>
          <Text>Estado: {this.props.data.uf}</Text>
      </View>
    );
  }
}
 
export default Ceps;
