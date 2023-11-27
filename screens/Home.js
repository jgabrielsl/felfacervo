import { View, ImageBackground, StyleSheet, StatusBar, Text, TouchableOpacity } from 'react-native'
import  { SafeAreaView } from 'react-native-safe-area-context'
import Logo from '../components/Logo'
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content'/>
      <ImageBackground style={styles.image} source={require('../assets/home.png')} resizeMode='cover'>

        <SafeAreaView style={styles.content}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Logo color='#ffffff' />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.text}>NOVAS COLEÇÕES</Text>
            <Text style={styles.textFooter}>Aproveite a nova coleção de Verão com 20% de desconto</Text>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('PaginaInicial')}>
              <Text style={styles.btnText}>Ver Agora</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  )
};
export default Home;

const styles = StyleSheet.create({
  container:  {
    flex: 1,
  },
  image:  {
    flex: 1
  },
  content: {
    flex: 1,
    justifyContent: 'space-between'
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 24
  },
  menu: {
    width: 35,
    height: 2,
    backgroundColor: '#ffff',
    marginVertical: 2.5,
  },
  text: {
    width: '100%',
    paddingHorizontal: 16,
    fontSize: 48,
    color: '#F1EDE6',
    fontFamily: 'Misologist'
  },
  textFooter: {
    width: '100%',
    paddingHorizontal: 16,
    marginTop: 10,
    color: '#F1EDE6',
    fontSize: 16,
    fontFamily: 'Poppins_300Light'
  },
  btn: {
    width:'100%',
    marginTop: 40,
    backgroundColor: 'white',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  
  },
  btnText: {
  fontFamily: 'Poppins_600SemiBold',
  letterSpacing: 0.02
  }

});