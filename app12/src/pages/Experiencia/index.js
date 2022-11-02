import React from 'react';
import { View, Text, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
 
 
export default function Home() {
  const navigation = useNavigation();
 return (
   <View>
     <Text>Experiência</Text>
     <Button onPress={() => navigation.goBack()} title="Voltar para a Home" />
   </View>
  );
}
