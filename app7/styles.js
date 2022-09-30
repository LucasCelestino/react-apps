import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#FFF',
      justifyContent:'center'
    },
    input: {
      height: 35,
      borderBottomWidth: 1,
      borderColor: '#222',
      width:200
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
      color:'blue'
    },
    image:{
        width:200,
        height:200,
        margin:'auto',
        marginVertical:15
    },
    view_input:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        marginBottom:30
    },
    title_input:{
        marginRight:5,
        textAlign:'right'
    },
    picker:{
        width:190,
    },
    slider:{
        width:200,
        height:80
    }
  });

  export {styles};