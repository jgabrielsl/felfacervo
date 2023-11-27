import {View, StyleSheet, StatusBar, TouchableOpacity, Image, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Logo from '../components/Logo';
import { useNavigation } from '@react-navigation/native';

export default function Produto(){
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <SafeAreaView style={styles.content}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Logo color="#000000" />
          </TouchableOpacity>
        </View>
        <Image style={styles.imagem} source={require('../assets/exemplo.png')}/>
        <View style={styles.juntos}>
          <Text style={styles.text}>Roupa Vintage</Text>
          <Text style={styles.text}>R$199,90</Text>
        </View>
        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Compra')}>
          <Text style={styles.buttonText}>Comprar Agora</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  imagem: {
    justifyContent: 'center',
    width: 340,
    height: 400,
    marginLeft: 25,
    borderRadius: 16,
  },
  text:{
    fontFamily: 'Poppins_300Light',
    fontSize: 14,
    marginLeft: 30,
    
  },
  juntos:{
    marginTop:  7,
  },
  botao: {
    justifyContent: 'center',
    backgroundColor: '#000000',
    width: 340,
    height:40,
    borderRadius: 40,
    marginLeft: 28,
    marginTop: 20,
  },
  buttonText:{
    color: '#ffffff',
    justifyContent: 'center',
    marginLeft: 125,
  }
});
