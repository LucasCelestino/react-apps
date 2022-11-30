import React, { useState } from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator,TextInput } from 'react-native';
 
import api from './src/services/api';
import Ceps from './src/Ceps';
 
class App extends Component {

  const [cep, setCep] = useState()
 
  constructor(props){
    super(props);
    this.state = {
      ceps: []
    };
  }
 
  async componentDidMount(){
    const response = await api.get('"'.{cep}.'"/json/');
    this.setState({
      ceps: response.data
    });
  }
 
  render()
  {
    return(
        <View style={styles.container}>
          <TextInput
          style={styles.input}
          onChangeText={setCep}
          value={cep}
          />
          <FlatList
          data={this.state.ceps}
          keyExtractor={item => item.id.toString() }
          renderItem={ ({item}) => <Ceps data={item} /> }
          />
  
        </View>
      )
    }
  }
 
const styles = StyleSheet.create({
  container:{
    flex:1,
  }
});
 
export default App;
 
 
