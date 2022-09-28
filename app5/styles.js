import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#FFF',
      justifyContent:'center'
    },
    input: {
      height: 45,
      borderWidth: 1,
      borderColor: '#222',
      margin: 10,
      fontSize: 20,
      padding: 10,
    },
    title:{
      fontSize:20,
      color: 'orange',
      textAlign:'center',
      marginBottom:20
    },
    resultado:{
      fontSize:23,
      textAlign:'center',
      color:'green'
    },
    image:{
        width:200,
        height:200,
        margin:'auto',
        marginVertical:15
    }
  });

  export {styles};