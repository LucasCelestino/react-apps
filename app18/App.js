import React, { useState } from "react";
import { View, StyleSheet, FlatList, ActivityIndicator,TextInput } from 'react-native';
 
import api from './src/services/api';
import Devs from './src/Devs';
 
class App extends Component {

  const [dev, setDev] = useState();
 
  constructor(props){
    super(props);
    this.state = {
      devs: []
    };
  }
 
  async componentDidMount(){
    const response = await api.get({dev});
    this.setState({
      devs: response.data
    });
  }
 
  render()
  {
    return(
        <View style={styles.container}>
          <Text style={styles.paragraph}>
          Perfil dos Devs
          </Text>
          <TextInput
          style={styles.input}
          onChangeText={setDev}
          value={dev}
          placeholder="Digite o login git..."
          />
          <FlatList
          data={this.state.devs}
          keyExtractor={item => item.id.toString() }
          renderItem={ ({item}) => <Devs data={item} /> }
          />
  
        </View>
      )
    }
  }
 
const styles = StyleSheet.create({
  container:{
    flex:1,
  },
   paragraph: {
    margin: 5,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    borderBottomWidth:1
  }
});
 
export default App;
 
 
