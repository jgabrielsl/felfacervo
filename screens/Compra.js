import {View, StyleSheet, StatusBar, TouchableOpacity, Image, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Logo from '../components/Logo';
import { useNavigation } from '@react-navigation/native';


export default function Compra(){
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
        <Text style={styles.textoPedido}>Pedido Concluido</Text>
        <Text style={styles.numero}>Nº 0001</Text>
        <Text style={styles.entrega}>O prazo para entrega é de até 2 dias úteis!</Text>
        
        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('PaginaInicial')}>
          <Text style={styles.buttonText}>Comprar Mais</Text>
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
  menu: {
    width: 35,
    height: 2,
    backgroundColor: '#000000',
    marginVertical: 2.5,
  },
  textoPedido:{
    fontFamily: 'Poppins_400Regular',
    fontSize: 36,
    marginLeft: 115,
    marginTop: 100,
  },
  numero:{
    fontFamily: 'Poppins_300Light',
    fontSize: 36,
    marginLeft: 130,
    marginBottom: 4,
    color: 'gray',
  },
  entrega:{
    fontFamily: 'Poppins_300Light',
    fontSize: 20,
    marginLeft: 100,
    marginRight: 90,
    marginTop: 80,
    height: 200,
  },
  botao: {
    justifyContent: 'center',
    backgroundColor: '#000000',
    width: 340,
    height:40,
    borderRadius: 40,
    marginLeft: 28,
    marginTop: 75,
  },
  buttonText:{
    color: '#ffffff',
    justifyContent: 'center',
    marginLeft: 125,
  }
});
