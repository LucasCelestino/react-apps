import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
 
class Devs extends Component{
  render(){
    return(
      <View>
          <Text>Id: {this.props.data.id}</Text>
          <Text>Nome: {this.props.data.login}</Text>
          <Text>Repositórios: {this.props.data.repos_url}</Text>
          <Text>Criado em: {this.props.data.created_at}</Text>
          <Text>Seguidores: {this.props.data.followers}</Text>
          <Text>Seguindo: {this.props.data.following}</Text>
      </View>
    );
  }
}
 
export default Devs;
